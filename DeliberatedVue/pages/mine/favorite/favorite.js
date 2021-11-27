// pages/mine/favorite/favorite.js
import {
    myFavorite
  } from "../../../api/mine"
  import {
    dealFavorite
  } from "../../../api/mine"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        collect:[
            {
                title:'vue.js是什么？',
                nickName:'墨刀的刀',
                date:'2021-09-15',
                status:1,
                url:'../../forum/details/details'
            },
            {
                title:'vue.js是什么？',
                nickName:'墨刀的刀',
                date:'2021-09-15',
                status:1,
                url:'../../forum/details/details'
            },
            {
                title:'vue.common.js',
                nickName:'墨刀的刀',
                date:'2021-09-15',
                status:2
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.myFavorite()
    },
    myFavorite() {
        let data = {
            "openId": wx.getStorageSync('openId')
        }
        console.log(data)
        myFavorite("POST", data, true).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    dealFavorite() {
        let data = {
            "openId": wx.getStorageSync('openId'),
            "questionId":"10001",
            "type":2
        }
        console.log(data)
        dealFavorite("POST", data, true).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    toDetail(){
        wx.navigateTo({
          url: '',
        })
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