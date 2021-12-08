import {
	getArticle,
	addArticleReply,
	articleReplies,
	articleLikes,
	articleReplyLikes,
	delArticleReply,
	addScore,
	getScore
} from "../../../api/forum"

var util = require("../../../utils/util");

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		comments: [],
		articleId: 0,
		article: "",
		currentComment: "",
		userInfo: [], //存储userinfo的内容
		commenterInfo: [], //存储评论者的用户信息
		myScore: 0,
		authorOpenId:"" // 作者的openId
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			articleId: options.articleId,
			likesArticle: options.likesArticle
		})
		console.log(wx.getStorageSync('openId'))
		this.getArticle();
		this.articleReplies();
		this.getScore();
	},

	// 获取帖子具体数据
	getArticle() {
		let data = {
			"articleId": this.data.articleId
		};
		let that = this;
		getArticle("POST", data, true).then(res => {
			that.setData({
				article: res.data.data.detail,
				userInfo: JSON.parse(res.data.user.userInfo),
				authorOpenId: res.data.user.openId
			})
			console.log(res.data)
			console.log("userInfo ", this.data.userInfo)
		}).catch(err => {
			console.log(err)
		})

	},

	// 获取评论内容
	commentInput: function (e) {
		this.data.currentComment = e.detail.value
		this.setData({
			currentComment: this.data.currentComment
		})
		// console.log(this.data.currentComment)
	},
	// 发送评论
	sendComment() {
		if(this.data.currentComment){
			this.addArticleReply();
			this.setData({
				currentComment: ""
			})
		}
		else wx.showToast({
		  title: '评论内容不能为空',
		  icon: 'none',
		})
	},
	//帖子的回复
	addArticleReply() {
		let data = {
			"replier": wx.getStorageSync('openId'),
			"articleId": this.data.articleId,
			"detail": this.data.currentComment
		};
		addArticleReply("POST", data, true).then(res => {
			console.log(res)
			this.articleReplies();
		}).catch(err => {
			console.log(err)
		})
	},

	// 查找某条帖子的回复，获取评论
	articleReplies() {
		let data = {
			"articleId": this.data.articleId,
			"openId": wx.getStorageSync('openId')
		};
		articleReplies("POST", data, true).then(res => {
			this.setData({
				comments: res.data,
				likesComments: res.likesRecord
			})
			console.log("comments",res.data)
			for(var i = 0; i < this.data.comments.length; i++){
				this.data.commenterInfo[i] = JSON.parse(this.data.comments[i].user.userInfo);
			}
			this.setData({
				commenterInfo: this.data.commenterInfo
			})
			console.log("comments", this.data.comments)
			console.log("commenterInfo", this.data.commenterInfo)
			console.log("likesComments", this.data.likesComments)
		}).catch(err => {
			console.log(err)
		})
	},

	// 点赞帖子的评论
	commentLike(e) {
		var index = e.currentTarget.dataset.index
		if(this.data.likesComments[index] == 1) this.data.likesComments[index] = 2
		else this.data.likesComments[index] = 1
		this.setData({
			likesComments: this.data.likesComments
		})
		this.articleReplyLikes(this.data.comments[index].data.articleReplyId,this.data.likesComments[index])
	},

	// 点赞某条帖子的回复 点赞评论
	articleReplyLikes(articleReplyId,type) {
		let data = {
			"articleReplyId": articleReplyId,
			"openId": wx.getStorageSync('openId'),
			"type": type
		};
		articleReplyLikes("POST", data, true).then(res => {
			console.log(res)
			this.articleReplies()
		}).catch(err => {
			console.log(err)
		})
	},



	// 点赞或者取消点赞某个帖子
	postLike() {
		if(this.data.likesArticle == 1) this.data.likesArticle = 0
		else this.data.likesArticle = 1
		this.setData({
			likesArticle: this.data.likesArticle,
		})
		this.articleLikes(this.data.likesArticle);
	},
	// 点赞某条帖子的接口函数
	articleLikes(type) {
		let data = {
			"articleId": this.data.articleId,
			"openId": wx.getStorageSync('openId'),
			"type": type
		};
		articleLikes("POST", data, true).then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})
	},


	//长按删除评论
	deleteCommentToast(e) {
		var that = this;
		if(this.data.comments[e.currentTarget.dataset.index].data.replier == wx.getStorageSync('openId') ){
			wx.showModal({
				title: "确定删除该评论吗？",
				success:function(res){
					if(res.confirm) that.delArticleReply(e.currentTarget.dataset.index)
				}
			})
		}
	},

	//删除评论的接口函数
	delArticleReply(index) {
		let data = {
			"articleReplyId": this.data.comments[index].data.articleReplyId
		};
		delArticleReply("POST", data, true).then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})
		this.articleReplies();
	},

	// 获取用户积分
    getScore() {
        let data = {
            "openId": wx.getStorageSync('openId')
        }
        getScore("POST", data, true).then(res => {
            this.setData({
                myScore: res.score
			})
			console.log("myScore",this.data.myScore)
        }).catch(err => {
            console.log(err);
        })
    },

    // 增减用户积分
    addScore(openId,reward, type) {
        let data = {
            "openId": openId,
            "reward": reward,
            "type": type
        }
        addScore("POST", data, true).then(res => {
			console.log('addScore 结果', res);
			this.getScore();
        }).catch(err => {
            console.log(err);
        })
	},

	// 打赏
	payReward(){
		var that = this
		wx.showModal({
		  title:'可用积分数：'+that.data.myScore,
		  editable:true,
		  placeholderText: '请输入要打赏的积分数',
		  success(res){
			  if(res.confirm && res.content <= that.data.myScore){
				that.addScore(wx.getStorageSync('openId'),res.content,2)
				that.addScore(that.data.authorOpenId,res.content,1)
			  }else if(res.confirm && res.content > that.data.myScore){
				  wx.showToast({
					title: '积分余额不足',
					icon:'none'
				  })
			  }
		  }
		})
	}
})