import { readCode } from "../../../api/test";

// pages/catalogue/code/code.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    VueCode : "",
    flag : 0,
    hiddenmodalput: true,
    //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框
  },
  modalinput: function() {
    this.setData({
        hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮 
  cancel: function() {
    this.setData({
        hiddenmodalput: true
    });
  },
  //确认 
  confirm: function() {
    this.setData({
        hiddenmodalput: true
    })
  },
  addcomment : function (){
    this.setData({
      hiddenmodalput : false
    })
  },
  gotocomment :function (){
    wx.navigateTo({
      url: '/pages/catalogue/comment/comment',
    })
  },
  gotoquestion :function(){
    wx.navigateTo({
      url: '/pages/catalogue/question/question',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.codeId  = app.globalData.codeId
        this.setData({
          codeId:this.codeId
          })
      console.log('源码路径：',this.codeId)
      let data = {
        "path": this.codeId
      }
      readCode("POST", data, true).then(res => {
        // console.log(res)
        // console.log(res.data.codeId)
        this.setData({
          VueCode:res.data.code
        })
      }).catch(err => {
      console.log(err)
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})