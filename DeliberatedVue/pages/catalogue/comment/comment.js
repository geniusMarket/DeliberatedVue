// pages/catalogue/comment/comment.js

var app=getApp()
import {addAnnotation} from "../../../api/test";
import {selectAnnotation} from "../../../api/test";
import {readCode} from "../../../api/test";

var inputValue = ""
Page({
  /**
   * 页面的初始数据
   */
  data: {

    codeId:'',
    username:[
      {
        name:"深思熟Vue",
        comment_text:"更新节点,全量的属性更新,如果新老节点都有孩子，则递归执行 diff,如果新节点有孩子，老节点没孩子，则新增新节点的这些孩子节点,如果老节点有孩子，新节点没孩子，则删除老节点的这些孩子,更新文本节点",
        is_show:"展开",
        is_like:false,
        like_num:28,
        reply_num:233,
        pub_time:"3分钟前",
        is_reply:false,
        reply_text:"新旧节点都是静态的而且两个节点的 key 一样，并且新节点被 clone 了 或者 新节点有 v-once指令，则重用这部分节点",
        ellipsis: true, // 文字是否收起，默认收起
        username_reply:"一颗葡萄",
        like_src:"/icon/zan.png",
        reply_src:"/icon/reply.png",
      },
      {
        name:"深思熟Vue2",
        comment_text:"更新节点,全量的属性更新,如果新老节点都有孩子，则递归执行 diff,如果新节点有孩子，老节点没孩子，则新增新节点的这些孩子节点,如果老节点有孩子，新节点没孩子，则删除老节点的这些孩子,更新文本节点",
        is_show:"展开",
        is_like:false,
        like_num:28,
        reply_num:2,
        pub_time:"7分钟前",
        is_reply:false,
        reply_text:"新旧节点都是静态的而且两个节点的 key 一样",
        ellipsis: true, // 文字是否收起，默认收起
        username_reply:"一颗葡萄2",
        like_src:"/icon/zan.png",
        reply_src:"/icon/reply.png",
      },
      
    ],
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    inputValue = e.detail.value
    console.log(inputValue)
  },
  /**
   * 排序
   */
  compare: function(name) {
    return function(o, p) {
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
    } 
    else {
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
    console.log("当前点击下标:",index)
    //data中获取列表
    var value = this.data.username;
    for (let i in value){
      console.log(value[i].ellipsis)
      //遍历列表数据
      if(i == index){
        if (value[i].ellipsis) {
          value[i].ellipsis = false,
          value[i].is_show = "收起"
        }
        else if (!value[i].ellipsis) {

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

  is_like: function (e){
    //获取当前点击下标
    var index = e.currentTarget.dataset.index;
    console.log(index)
    //data中获取列表
    var value = this.data.username;
    for (let i in value){
      //遍历列表数据
      if(i == index){

        if (value[i].is_like) {
          value[i].is_like = false,
          value[i].like_num = parseInt(value[i].like_num) - 1,
          value[i].like_src = "/icon/zan.png"

        }
        else if (!value[i].is_like) {
          value[i].is_like = true,
          value[i].like_num = parseInt(value[i].like_num) + 1

          value[i].like_src = "/icon/selectedzan.png"
        }
      }
    }

    console.log(value[index].like_src)

    //重新赋值
    this.setData({
      username: value,
    })

    this.onLoad()

  },
  /**
   * 回复函数
   */

  is_reply: function (e){

    //获取当前点击下标
    var index = e.currentTarget.dataset.index;
    // console.log(index)
    //data中获取列表
    var value = this.data.username;

    for (let i in value){
      //遍历列表数据
      if(i == index){
        if (value[i].is_reply) {
          value[i].is_reply = false,
          value[i].reply_src = "/icon/reply.png"
        }
        else if (!value[i].is_like) {
          value[i].is_reply = true,
          value[i].reply_src = "/icon/selectedreply.png"
        }
      }
    }
    console.log(value[index].reply_src)
    //重新赋值
    this.setData({
      username: value,
    })
  },

  readCode:function(){  //获取源码

    let data = {
      "path": this.data.codeId
    }
    readCode("POST", data, true).then(res => {

      console.log(res)
      console.log(res.data.codeId)
      this.setData({
        VueCode:res.data.code
      })
    }).catch(err => {
    console.log(err)
  }) 
  },

  addAnnotation:function(){  //添加注释
      //post到服务器
      let data = {
        "userId":"DSAsddad",
        "filePath": this.data.codeId,
        "moduleName": this.data.codeId,
        "detail": "具体内容", 
        "userId": "safsfsdsad"
      }
      addAnnotation("POST", data, true).then(res => {
        console.log(res)
        // console.log(res.data)
      }).catch(err => {
      console.log(err)
    }) 
  },

  selectAnnotation:function(){ //获取注释
    //post到服务器
    let data = {
      "moduleName": this.data.codeId
    }
    selectAnnotation("POST", data, true).then(res => {
      console.log(res)
      // console.log(res.data)
    }).catch(err => {
    console.log(err)
  }) 

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //点赞数从大到小排序注释
      this.setData({
        username: this.data.username.sort(this.compare("like_num")).reverse(),
      })
      var codeId  = app.globalData.codeId
      this.setData({
        codeId:codeId
        })
      console.log(this.data.codeId)
      this.readCode()  //获取源码

  }

})