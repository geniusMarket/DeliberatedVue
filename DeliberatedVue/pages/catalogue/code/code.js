import {
  readCode
} from "../../../api/test";
import {
  addAnnotation
} from "../../../api/test";
// pages/catalogue/code/code.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    VueCode: "",
    flag: 0,
    hiddenput: true,
    display: 'none',
    comment: '',
  },
  return(){
    wx.navigateBack({
      delta:6
    })
  },
  //取消按钮 
  cancel: function () {
    this.setData({
      display: 'none'
    })
  },
  //确认 
  confirm: function () {
    this.setData({
      display: 'none'
    })
  },
  addcomment: function () {
    if (this.data.display == 'none') {
      this.setData({
        display: 'block'
      })
    } else {
      this.setData({
        display: 'none'
      })
    }
  },
  formSubmit: function (e) {
    // console.log(e)
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.codeId = app.globalData.codeId
    var comment = e.detail.value.comment
    if(comment==''){
      wx.showToast({
        title: '注释不能为空！',
        icon:'error'
      })
    }
    else{
        this.setData({
          codeId: this.codeId,
          comment: comment
        })
        let data = {
          "userId": app.globalData.userName,
          "filePath": this.data.codeId,
          "moduleName": this.data.codeId,
          "detail": this.data.comment
        }
        console.log(data)
        addAnnotation("POST", data, true).then(res => {
          console.log(res)
        })
      }
  },
  gotocomment: function () {
    wx.navigateTo({
      url: '/pages/catalogue/comment/comment',
    })
  },
  gotoquestion: function () {
    wx.navigateTo({
      url: '/pages/forum/questPut/questPut',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.codeId = app.globalData.codeId
    this.setData({
      codeId: this.codeId
    })
    let data = {
      "path": this.codeId
    }
    readCode("POST", data, true).then(res => {
      this.setData({
        VueCode: res.data.code,
      })
      var new_CodeList = []
      var CodeList= res.data.code.split('\n\n')
      for(let i in CodeList){
        // console.log(CodeList[i])
          var code = CodeList[i] 
          new_CodeList.push(code)
      }
      // console.log(new_CodeList)
      this.setData({
        CodeList: new_CodeList,
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