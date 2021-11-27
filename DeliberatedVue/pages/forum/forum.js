// pages/forum/forum.js
import {
  selectArticle
} from "../../api/forum"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.selectArticle()
  },
  // 查询帖子，获取所有的帖子列表
  selectArticle() {
    let data = {
        "type": "all",
        "request": ""
    }
    var that = this
    selectArticle("POST", data, true).then(res => {
      that.setData({
        postList: res.data
      })
      console.log(this.data.postList)
    }).catch(err => {
      console.log(err)
    })

  }
})