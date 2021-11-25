// pages/catalogue/comment/comment.js
var app = getApp()
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
    likes:1,
  },

  formSubmit: function (e) {
    // console.log(e)
    var that = this;
    if (e.detail.value.event == '') {
      wx.showToast({
        title: '注释为空',
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


  addAnnotation: function () { //添加注释
    //post到服务器
    let data = {
      "userId": "DSAsddad",
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
  annotationLikes: function (index) {
    //post到服务器
    var annotation = this.data.annotations[index]
    let data = {
      "annotationId": annotation.data.annotationId
    }
    annotationLikes("POST", data, true).then(res => {
      console.log("点赞注释部分返回的like_num：", res.data.likes)
      console.log('点赞注释部分里的annotation:', annotation)
      console.log('点赞注释里的注释列表',this.data.username)
      this.setData({
        likes : res.data.likes
      })
    }).catch(err => {
      console.log(err)
    })
    console.log('点赞注释部分的this.data.likes',this.data.likes)
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
    // console.log(value[index].is_show)

  },
  /**
   * 点赞函数
   */
  is_like: function (e) {
    //获取当前点击下标
    var index = e.currentTarget.dataset.index;
    console.log('点赞函数里的index', index)
    //data中获取列表
    var value = this.data.username;
    console.log('index对应的annotationid',this.data.username[index].annotationId)
    console.log('点赞函数里的注释列表',value)
    for (let i in value) {
      //遍历列表数据
      if (i == index) {
        if (value[i].is_like) {
          value[i].is_like = false,
          value[i].like_num = parseInt(value[i].like_num) - 1,
          value[i].like_src = "/icon/zan.png"
        } else if (!value[i].is_like) {
          this.annotationLikes(index)
          value[i].is_like = true,
          console.log('点赞函数里的like_num',this.data.likes)
          value[i].like_num = this.data.likes
          value[i].like_src = "/icon/selectedzan.png"
        }
      }
    }
    //重新赋值
    this.setData({
      username: value,
    })
    console.log('修改后的username',this.data.username)
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
            value[i].reply_src = "/icon/reply.png"
        } else if (!value[i].is_like) {
          // console.log(annotationId)
          this.selectAnnotationReply(annotationId)
          value[i].is_reply = true,
            value[i].reply_src = "/icon/selectedreply.png"
        }
      } else {
        value[i].is_reply = false,
          value[i].reply_src = "/icon/reply.png"
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
    this.setData({
      comment2: e.detail.value.comment_details
    })
    // console.log(this.data.comment2)
    // console.log(this.data.annotationId)
    this.addAnnotationReply()
    that.setData({
      form_info: '' //清空输入框内容
    })
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

  selectAnnotation: function () { //获取注释和回复
    //post到服务器
    var annotations_new = []
    let data = {
      "moduleName": this.data.codeId,
      "type": "notall"
    }
    console.log(this.data.codeId)
    selectAnnotation("POST", data, true).then(res => {
      console.log("获取注释部分返回：", res.data)
      this.setData({
        annotations: res.data
      })
      for (var i = 0; i < this.data.annotations.length; i++) {
        var annotation = this.data.annotations[i]
        var reply = []
        var fold = false //是否显示“展开”二字，默认不显示
        let data = {
          "annotationId": annotation.data.annotationId
        }
        // console.log("user",annotation.data)
        selectAnnotationReply("POST", data, true).then(res => {
          console.log("获取回复部分：", res.data)
          reply.push(res.data)
          this.setData({
            reply: reply
          })
          wx.setStorageSync('reply', this.data.reply)
          // console.log(this.data.reply)
        }).catch(err => {
          console.log("获取回复部分：", err)
        })
        if (annotation.data.detail.length > 38) {
          fold = true
        }
        var obj = {
          name: annotation.data.userId,
          comment_text: annotation.data.detail,
          annotationId: annotation.data.annotationId,
          fold: fold,
          is_show: "展开",
          is_like: wx.getStorageSync('annotation')[i].is_like,
          like_num: wx.getStorageSync('annotation')[i].like_num,
          pub_time: "3分钟前",
          is_reply: false,
          reply: wx.getStorageSync('reply')[i],
          ellipsis: true, // 文字是否收起，默认收起
          like_src: wx.getStorageSync('annotation')[i].like_src,
          reply_src: "/icon/reply.png",
        }
        annotations_new.push(obj);
      }
      this.setData({
        username: annotations_new,
      })
      console.log(this.data.username)
    }).catch(err => {
      console.log(err)
    })
  },

  //添加回复
  addAnnotationReply: function () {
    // console.log(this.data.annotationId)
    let data = {
      "userId": "user01",
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
      "annotationId": annotationId
    }
    selectAnnotationReply("POST", data, true).then(res => {
      console.log("获取回复部分：", res)
      this.setData({
        annotationReply: res.data
      })
      // console.log(annotationReply)
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
    console.log('缓存',wx.getStorageSync('annotation'))
    //点赞数从大到小排序注释
    this.setData({
      username: this.data.username.sort(this.compare("like_num")).reverse(),
    })
    var codeId = app.globalData.codeId
    this.setData({
      codeId: codeId,
      reply: []
    })
    // console.log("源码路径：",this.data.codeId)
    this.readCode() //获取源码
    this.selectAnnotation() // 获取注释
  }

})