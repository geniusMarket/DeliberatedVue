
import {
  getArticle,
  addArticleReply,
  articleReplies,
  articleLikes
} from "../../../api/forum"
var index;

Page({

  /**
   * 页面的初始数据
   */
  data: {

    likePost: false,
    comments: [],
    sendCom: false, //存储发送评论按钮的状态
    articleId: 0,
    article: "",
    currentComment: "",
    userInfo: [], //存储userinfo的内容

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({

      articleId: options.articleId
    })
    this.getArticle();
    this.articleReplies();
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
        userInfo: eval('(' + res.data.user.userInfo + ')')
      })
      console.log("userInfo ", this.data.userInfo)
    }).catch(err => {
      console.log(err)
    })

  },

  // 获取评论内容，显示评论发送按钮
  commentInput: function (e) {
    this.data.currentComment = e.detail.value
    if (this.data.currentComment) {
      this.setData({
        sendCom: true,
        currentComment: this.data.currentComment
      })
    } else {
      this.setData({
        sendCom: false,
        currentComment: this.data.currentComment
      })
    }
    // console.log(this.data.currentComment)
  },
  // 发送评论
  sendComment() {
    this.addArticleReply();
    this.articleReplies();
  },
  //帖子的回复
  addArticleReply() {
    let data = {
      "replier": "joi",
      "articleId": this.data.articleId,
      "detail": this.data.currentComment
    };
    addArticleReply("POST", data, true).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  // 查找某条帖子的回复，获取评论
  articleReplies() {
    let data = {
      "articleId": this.data.articleId
    };
    articleReplies("POST", data, true).then(res => {
      this.setData({
        comments: res.data,
      })
      console.log("comments", this.data.comments)
    }).catch(err => {
      console.log(err)
    })
  },
  // 点赞或者取消点赞某个帖子
  postLike(){
    this.data.likePost = !this.data.likePost;
    this.setData({
      likePost: this.data.likePost,
    })
    this.articleLikes();
  },
  // 点赞某条帖子的接口函数
  articleLikes(){
    let data = {
      "articleId": this.data.articleId
    };
    articleLikes("POST", data, true).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

})