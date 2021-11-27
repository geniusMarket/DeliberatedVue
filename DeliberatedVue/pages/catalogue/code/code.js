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
    this.setData({
      codeId: this.codeId,
      comment: comment
    })
    let data = {
      "userId": "DSAsddad",
      "filePath": this.data.codeId,
      "moduleName": this.data.codeId,
      "detail": this.data.comment
      // "userId": "DSAsddad",
      // "filePath": "src\\\\compiler\\\\codeframe.js",
      // "moduleName": "src\\\\compiler\\\\codeframe.js",
      // "detail": "具体内容"
    }
    console.log(data)
    addAnnotation("POST", data, true).then(res => {
      console.log(res)
    })
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
    this.codeId = app.globalData.codeId
    this.setData({
      codeId: this.codeId
    })
    let data = {
      "path": this.codeId
    }
    readCode("POST", data, true).then(res => {
      this.setData({
        VueCode: res.data.code
      })
    }).catch(err => {
      console.log(err)
    })
  },
})