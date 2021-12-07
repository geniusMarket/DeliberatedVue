import {
  readCode
} from "../../../api/test";
import {
  addAnnotation
} from "../../../api/test";
// pages/catalogue/code/code.js
var app = getApp()

var name
var father
var isLightUp = -1
var section

var tree 
var data1
var data2
var data3 
var data4
var data5
var data6
var data7
var data8 
var data9 
var data10

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

    lightUpMsg: '',

  },
  return () {
    wx.navigateBack({
      delta: 6
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
    if (comment == '') {
      wx.showToast({
        title: '注释不能为空！',
        icon: 'error'
      })
    } else {
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
      url: '/pages/forum/questPut/questPut?mode=1',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //读路由传参

    name = String(options.name)
    father = String(options.father)
    isLightUp = Number(options.isLightUp)
    section = Number(options.section)

    tree = wx.getStorageSync('skillTree');
    data1 = tree[1]
    data2 = tree[2]
    data3 = tree[3]
    data4 = tree[4]
    data5 = tree[5]
    data6 = tree[6]
    data7 = tree[7]
    data8 = tree[8]
    data9 = tree[9]
    data10 = tree[10]


    var msg
    if (isLightUp == 0) {
      msg = '点亮技能'
    } else if (isLightUp == 1) {
      msg = '技能已点亮'
    }

    this.codeId = app.globalData.codeId
    this.setData({
      codeId: this.codeId,
      lightUpMsg: msg,
    })
    let data = {
      "path": this.codeId
    }
    readCode("POST", data, true).then(res => {
      this.setData({
        VueCode: res.data.code,
      })
      var new_CodeList = []
      var CodeList = res.data.code.split('\n\n')
      for (let i in CodeList) {
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

  // 点亮技能树
  lightUp: function () {
    if (isLightUp == 0) {
      isLightUp = 1
      this.setData({
        lightUpMsg: '技能已点亮'
      })

      var node = tree[section]
      this.lightUpNode(node)

      wx.showToast({
        title: '技能点亮成功',
      })
    } else if (isLightUp == 1) {
      wx.showToast({
        title: '该技能已点亮',
      })
    }
  },

  lightUpNode(node) {
    console.log(node)
    if (node.name == father) {
      node.lightUpNode += 1
      // if (condition) {
        
      // }
    }

  }
});