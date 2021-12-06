// pages/forum/forum.js
import {
  selectArticle
} from "../../api/forum"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList:[],
    userInfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: eval('(' + wx.getStorageSync('userInfo') + ')'),
    })
  },

  onShow: function(){
    this.selectArticle()
  },
  // 查询帖子，获取所有的帖子列表
  selectArticle() {
    let data = {
        "type": "all",
        "request": "",
        "openId": wx.getStorageSync('openId')
    }
    var that = this
    selectArticle("POST", data, true).then(res => {
      that.setData({
        postList: res.data,
        likesRecord: res.likesRecord
      })
      console.log(this.data.postList)
      console.log(this.data.likesRecord)
    }).catch(err => {
      console.log(err)
    })
  }
})