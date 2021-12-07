// pages/mine/question/question.js
import {
    getQuestion
  } from "../../../api/mine"
Page({

    /**
     * 页面的初始数据
     */
    data: {

        question: [{
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: 'fdsf',
                time: '昨天 00：18',
                question: '提问1\ndwd\ndasdsadsaadfsfesfefefesfffesdsfdsfdsfsdfsfsdfdsfdsfd\ndsads\ndsads\ndsads\ndsads\ndsads'
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: 'fdsdfsdsf441',
                time: '前天 22：13',
                question: '提问2'
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: 'fdsss135',
                time: '2021-11-22 04：18',
                question: '提问3'
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getQuestion()
    },
    getQuestion() {
        let data = {
            "openId": wx.getStorageSync('openId')
        }
        console.log(data)
        getQuestion("POST", data, true).then(res => {
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