// pages/catalogue/comment/comment.js
var app = getApp()
var util = require("../../../utils/util");
import {
  addAnnotation
} from "../../../api/test";
import {
  selectAnnotation
} from "../../../api/test";
import {
  readCode
} from "../../../api/test";
import {
  annotationLikes
} from "../../../api/test";
import {
  addAnnotationReply
} from "../../../api/test";
import {
  selectAnnotationReply
} from "../../../api/test";
import {
  delAnnotationReply
} from "../../../api/test";
import {
  delAnnotation
} from "../../../api/test";
var inputValue = ""
Page({
  /**
   * 页面的初始数据
   */
  data: {
    codeId: '',
    comment: '', //注释
    annotations: '',
    annotationId: '', //注释ID
    comment2: '', //评论
    annotationReply: [], //某一注释的所有评论
    replyId: '', //评论Id
    reply: [], //全部评论
    username: [],
  },

  formSubmit: function (e) {
    // console.log(e)
    var that = this;
    if (e.detail.value.event == '') {
      wx.showToast({
        title: '注释不能为空！',
        icon:'error'
      })
    } else {
      console.log('发表注释：', e.detail.value.event)
      this.setData({
        comment: e.detail.value.event
      })
      this.addAnnotation()
      that.setData({
        form_info: '' //清空输入框内容
      })
      this.onLoad()
    }
  },

  timeTest(dateStr) {  //获取时间
    var timeNow = util.formatTime(new Date());
    timeNow = timeNow.replace(/-/g, '/');
    timeNow = Date.parse(timeNow);
    // console.log(timeNow);
    var diffValue = (timeNow - dateStr)/1000;
    // console.log(diffValue);
    var diffDays = parseInt(diffValue / 86400);
    var diffHours = parseInt(diffValue / 3600);
    var diffMinutes = parseInt(diffValue / 60);
    var diffSeconds = parseInt(diffValue);
    if(diffDays > 365) return parseInt(diffDays / 365) + "年前";
    else if(diffDays > 30) return parseInt(diffDays / 30) + "月前";
    else if(diffDays > 10) return "一个月内";
    else if(diffDays > 0) return diffDays + "天前";
    else if(diffHours > 0) return diffHours + "小时前";
    else if(diffMinutes > 0) return diffMinutes + "分钟前";
    else if(diffSeconds<=0) return '刚刚';
    else return diffSeconds + "秒前";
},

  addAnnotation: function () { //添加注释
    //post到服务器
    let data = {
      "userId":  wx.getStorageSync('openId'),
      "filePath": this.data.codeId,
      "moduleName": this.data.codeId,
      "detail": this.data.comment
    }
    addAnnotation("POST", data, true).then(res => {
      console.log("添加注释部分返回：", res)
      // console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  },

  //删除注释
  delAnnotation(annotationId) {
    let data = {
      "annotationId": annotationId
    }
    delAnnotation("POST", data, true).then(res => {
      console.log("删除注释部分：", res)
      this.onLoad()
    }).catch(err => {
      console.log("删除注释部分：", err)
    })
  },

  delAnno: function (e) {
    // console.log(e.mark.annotation)
    var index = e.mark.annotation
    var annotationId = this.data.username[index].annotationId
    // console.log(annotationId)
    wx.showModal({
      title: '提示',
      content: '确定要删除此注释吗？',
      success: (res) => {
        if (res.confirm) {
          console.log('点击肯定了');
          this.delAnnotation(annotationId)
        } else if (res.cancel) {
          console.log('点击取消了');
        }
      }
    })
  },
  //点赞注释
  annotationLikes: function (index,type) {
    //post到服务器
    let data = {
      "annotationId": index,
      "openId": wx.getStorageSync('openId'),
      "type": type
    }
    annotationLikes("POST", data, true).then(res => {
        console.log("zanzan",res)
    }).catch(err => {
      console.log(err)
    })
    // this.selectAnnotation()
  },
  /**
   * 排序
   */
  compare: function (name) {
    return function (o, p) {
      var a, b;
      if (typeof o === "object" && typeof p === "object" && o && p) {
        a = o[name];
        b = p[name];
        if (a === b) {
          return 0;
        }
        if (typeof a === typeof b) {
          return a < b ? -1 : 1;
        }
        return typeof a < typeof b ? -1 : 1;
      } else {
        throw ("error");
      }
    }
  },
  /**
   * 收起/展开按钮点击事件
   */
  ellipsis: function (e) {
    //获取当前点击下标
    var index = e.currentTarget.dataset.index;
    // console.log("当前点击下标:",index)
    //data中获取列表
    var value = this.data.username;
    for (let i in value) {
      // console.log(value[i].ellipsis)
      //遍历列表数据
      if (i == index) {
        if (value[i].ellipsis) {
          value[i].ellipsis = false,
            value[i].is_show = "收起"
        } else if (!value[i].ellipsis) {
          value[i].ellipsis = true,
          value[i].is_show = "展开"
        }
      }
    }
    //重新赋值
    this.setData({
      username: value,
    })

  },
  /**
   * 点赞函数
   */
  is_like: function (e) {
    //获取当前点击下标
    var index = e.currentTarget.dataset.index;
    //data中获取列表
    var value = this.data.username;
    for (let i in value) {
      //遍历列表数据
      if (i == index) {
        if (value[i].is_like==1) {  //取消点赞
          this.annotationLikes(value[i].annotationId,0)
          value[i].is_like=0 
          value[i].like_num -= 1
          value[i].like_src = "https://geniusmarket.top/getPicture/icon/zan.png"
        } else if (value[i].is_like==0) {  //点赞
          this.annotationLikes(value[i].annotationId,1)
          value[i].is_like=1
          value[i].like_num += 1
          value[i].like_src = "https://geniusmarket.top/getPicture/icon/selectedzan.png"
        }
      }
    }
    this.setData({
      username:value
    })
    wx.setStorageSync('annotation', this.data.username)
  },
  /**
   * 回复函数
   */
  is_reply: function (e) {
    //获取当前点击下标
    var index = e.currentTarget.dataset.index;
    // console.log(index)
    //data中获取列表
    var value = this.data.username;
    for (let i in value) {
      //遍历列表数据
      if (i == index) {
        var annotationId = value[i].annotationId
        if (value[i].is_reply) {
          value[i].is_reply = false,
            value[i].reply_src = "https://geniusmarket.top/getPicture/icon/reply.png"
        } else if (!value[i].is_reply) {
          // console.log(annotationId)
          this.selectAnnotationReply(annotationId)
          value[i].is_reply = true,
          value[i].reply_src = "https://geniusmarket.top/getPicture/icon/selectedreply.png"
        }
      } else {
          value[i].is_reply = false,
          value[i].reply_src = "https://geniusmarket.top/getPicture/icon/reply.png"
      }
    }
    // console.log(annotationId)
    //重新赋值
    this.setData({
      username: value,
      annotationId: annotationId
    })
  },

  formSubmit_comment: function (e) {
    // console.log(e)
    var that = this;
    console.log('发表评论：', e.detail.value.comment_details)
    if(e.detail.value.comment_details==''){
      wx.showToast({
        title: '评论不能为空！',
        icon:'error'
      })
    }else{
      this.setData({
        comment2: e.detail.value.comment_details
      })
      this.addAnnotationReply()
      that.setData({
        form_info: '' //清空输入框内容
      })
    }
  },

  readCode: function () { //获取源码
    let data = {
      "path": this.data.codeId
    }
    readCode("POST", data, true).then(res => {
      console.log("获取源码部分：", res)
      // console.log(res.data.codeId)
      this.setData({
        VueCode: res.data.code
      })
    }).catch(err => {
      console.log("获取源码部分：", err)
    })
  },

  selectAnnotation: function () { //获取注释
    //post到服务器
    var annotations_new = []
    let data = {
      "moduleName": this.data.codeId,
      "type": "notall",
      "openId": wx.getStorageSync('openId')
    }
    selectAnnotation("POST", data, true).then(res => {
      console.log("获取注释部分返回：", res)
      this.setData({
        annotations: res.data
      })
      for (var i = 0; i < this.data.annotations.length; i++) {
        var annotation = this.data.annotations[i]
        var fold = false //是否显示“展开”二字，默认不显示
        if (annotation.data.detail.length > 38) {
          fold = true
        }
        var userInfo = JSON.parse(annotation.user.userInfo)
        if(res.likeRecord[i]==1) {
          var like_src="https://geniusmarket.top/getPicture/icon/selectedzan.png"
        }else if(res.likeRecord[i]==0) {
          var like_src="https://geniusmarket.top/getPicture/icon/zan.png"
         }
        var obj = {
          name: userInfo.nickName,
          userImg:userInfo.avatarUrl,
          comment_text: annotation.data.detail,
          annotationId: annotation.data.annotationId,
          fold: fold,
          is_show: "展开",
          is_like: res.likeRecord[i],
          like_num: annotation.data.likes,
          pub_time: this.timeTest(annotation.data.createTime),
          is_reply: false,
          reply: wx.getStorageSync('reply')[i],
          ellipsis: true, // 文字是否收起，默认收起
          like_src:like_src,
          reply_src: "https://geniusmarket.top/getPicture/icon/reply.png",
        }
        annotations_new.push(obj);
      }
      this.setData({
        username: annotations_new,
      })
    }).catch(err => {
      console.log(err)
    })
  },

  //添加回复
  addAnnotationReply: function () {
    // console.log(this.data.annotationId)
    let data = {
      "userId": wx.getStorageSync('openId'),
      "detail": this.data.comment2,
      "annotationId": this.data.annotationId
    }
    addAnnotationReply("POST", data, true).then(res => {
      console.log("添加回复部分：", res)
      this.selectAnnotationReply(this.data.annotationId)
    }).catch(err => {
      console.log("添加回复部分：", err)
    })
  },

  //获取回复
  selectAnnotationReply(annotationId) {
    let data = {
      "annotationId": annotationId,
      "openId": wx.getStorageSync('openId')
    }
    var annotationReply = []
    selectAnnotationReply("POST", data, true).then(res => {
      console.log("获取回复部分：", res)
      for (var i = 0; i < res.data.length; i++) {
        var reply = res.data[i]
        var userInfo = JSON.parse(reply.user.userInfo)
        var userId = userInfo.nickName
        var userImage = userInfo.avatarUrl
        var detail = reply.data.detail
        var replyId = reply.data.replyId
        var obj = {
          userId:userId,
          userImage:userImage,
          detail:detail,
          replyId:replyId
        }
        annotationReply.push(obj);
      }
      this.setData({
        annotationReply: annotationReply
      })
      // console.log(this.data.annotationReply)
    }).catch(err => {
      console.log("获取回复部分：", err)
    })
  },

  //删除回复
  delAnnotationReply(replyId) {
    let data = {
      "annotationReplyId": replyId
    }
    delAnnotationReply("POST", data, true).then(res => {
      console.log("删除回复部分：", res)
      this.onLoad()
    }).catch(err => {
      console.log("删除回复部分：", err)
    })
  },

  delComment: function (e) {
    // console.log("annotation=>", e.mark.annotation)
    // console.log("comment=>", e.mark.comment)
    var annotation = e.mark.annotation;
    var comment = e.mark.comment;
    var value = this.data.annotationReply;

    var replyId = value[comment].data.replyId
    wx.showModal({
      title: '提示',
      content: '确定要删除此回复吗？',
      success: (res) => {
        if (res.confirm) {
          console.log('点击肯定了');
          this.delAnnotationReply(replyId)
          this.selectAnnotationReply(this.data.annotationId)
        } else if (res.cancel) {
          console.log('点击取消了');
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = JSON.parse(wx.getStorageSync('userInfo'))
    app.globalData.userName = userInfo.nickName
    app.globalData.userImage = userInfo.avatarUrl
  
    var codeId = app.globalData.codeId
    this.setData({
      codeId: codeId,
      reply: [],
      VueCode:app.globalData.code
    })
    this.selectAnnotation() // 获取注释
  }

  
})