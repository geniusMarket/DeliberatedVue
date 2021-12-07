// pages/forum/forum.js
import {
	selectArticle,
	articleLikes,
	addScore,
	getScore
} from "../../api/forum"
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		postList: [],
		userInfo: "",
		myScore: 0,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			userInfo: JSON.parse(wx.getStorageSync('userInfo')),
		})
		console.log(this.data.userInfo)
	},

	onShow: function () {
		this.selectArticle(false)
		this.getScore()
	},

	onPullDownRefresh() {
		// 下拉刷新
		this.selectArticle(true);
	},

	// 查询帖子，获取所有的帖子列表  showRefresh：当刷新触发selectArticle函数时显示‘已刷新’
	selectArticle(showRefresh) {
		let data = {
			"type": "all",
			"request": "",
			"openId": wx.getStorageSync('openId')
		}
		var that = this
		selectArticle("POST", data, false).then(res => {
			that.setData({
				postList: res.data,
				likesRecord: res.likesRecord
			})
			console.log("postList", this.data.postList)
			console.log("LikesRecord", this.data.likesRecord)
			if(showRefresh){
				wx.stopPullDownRefresh()
				setTimeout(function(){
					wx.showToast({
						title: '已刷新',
					})
				},500)	
			}
		}).catch(err => {
			console.log(err)
		})
	},

	gotoDetails(e) {
		var index = e.currentTarget.dataset.index
		wx.navigateTo({
			url: 'details/details?articleId=' + this.data.postList[index].data.articleId + '&likesArticle=' + this.data.likesRecord[index] + '',
		})
	},

	// 文章点赞
	likeArticle(e){
		var articleLike = this.data.likesRecord[e.currentTarget.dataset.index]
		if(articleLike == 1) articleLike = 0
		else articleLike = 1
		this.articleLikes(this.data.postList[e.currentTarget.dataset.index].data.articleId, articleLike)
	},

	// 点赞某条帖子的接口函数
	articleLikes(articleId,type) {
		let data = {
			"articleId": articleId,
			"openId": wx.getStorageSync('openId'),
			"type": type
		};
		console.log("articleLike data",data)
		articleLikes("POST", data, true).then(res => {
			console.log(res)
			this.selectArticle(false)
		}).catch(err => {
			console.log(err)
		})
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
	payReward(e){
		var index = e.currentTarget.dataset.index
		var that = this
		wx.showModal({
		  title:'可用积分数：'+that.data.myScore,
		  editable:true,
		  placeholderText: '请输入要打赏的积分数',
		  success(res){
			  if(res.confirm && res.content <= that.data.myScore){
				that.addScore(wx.getStorageSync('openId'),res.content,2)
				that.addScore(that.data.postList[index].data.author,res.content,1)
			  }else if(res.confirm && res.content > that.data.myScore){
				  wx.showToast({
					title: '积分余额不足',
					icon:'none'
				  })
			  }
		  }
		})
	},
})