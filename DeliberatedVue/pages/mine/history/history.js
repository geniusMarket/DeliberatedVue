// pages/mine/history/history.js
import {
    getHistory
  } from "../../../api/mine"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
        history:[
            {
                date:'今天',
                detail:[
                    {
                        title:'Vue.js是什么？',
                        url: '../../forum/details/details'
                    },
                    {
                        title:'什么是条件循环？',
                    },
                    {
                        title:'如何进行组件化应用构建？',
                    },
                ]
            },
            {
                date:'昨天',
                detail:[
                    {
                        title:'Vue.js是什么？',
                    },
                ]
            },
            {
                date:'2021-11-01',
                detail:[
                    {
                        title:'如何进行组件化应用构建？',
                    },
                    {
                        title:'Vue.js事件处理器',
                    },
                    {
                        title:'Vue项目实战（一）：项目简介',
                    },
                ]
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getHistory()
    },
    getHistory() {
        let data = {
            "openId": wx.getStorageSync('openId')
        }
        console.log(data)
        getHistory("POST", data, true).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      toDetail(){
          wx.navigateTo({
            // url: '../../forum/details/details?articleId=' + '',
          })
      }
})