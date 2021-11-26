// pages/forum/posting/posting.js
import {
    addArticle
  } from "../../../api/forum"
Page({

    /**
     * 页面的初始数据
     */
    data: {
      detail:"",
      title:"",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
    },
    // 发布一个帖子或修改帖子
    addArticle() {
        let data = {
            "author":"attention_123",
            "title":this.data.title,
            "detail":this.data.detail,
            "codeId": 0,
            "type": 1
        }
        addArticle("POST", data, true).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
    },

    // 获取帖子具体内容
    detailInput:function(e){
      this.data.detail = e.detail.value,
      this.setData({
        detail: this.data.detail,
      })
    },
    // 获取帖子标题
    titleInput:function(e){
      this.data.title = e.detail.value,
      this.setData({
        title: this.data.title,
      })
    },
    // 发布帖子
    sendPost(){
      this.addArticle();
    }
})