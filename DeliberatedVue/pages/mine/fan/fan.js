// pages/mine/fan/fan.js
import {
    fans
  } from "../../../api/fans"
  import {
    dealFans
  } from "../../../api/dealFans"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        follower: [{
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '1232',
                status: 1
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '12324',
                status: 2
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '125662',
                status: 1
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '1235352',
                status: 1
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '132',
                status: 1
            }
        ],
    //    follower:[],
        fan: [{
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '123432',
                status: 2
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '12ff32',
                status: 3
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '12dfsfs32',
                status: 3
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '32',
                status: 3
            },
            {
                avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/nibb7W6bx5xmrjJFlw7W5iaXhvRiathQIBYJnaWDEEngkRr8Pkfa4zcicTq8AGPld2X2DkeuPAEJ1L4ib3CcibSicoytQ/132',
                nickName: '12l32',
                status: 3
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options)
        if (options.isFan == "false") {
            this.setData({
                isFan: false
            })
            this.followers()
        } else {
            this.setData({
                isFan: true
            })
            this.fans()
        }

    },
    fans() {
        let data = {
            "openId": wx.getStorageSync('openId'),
            "type":1
        }
        console.log(data)
        fans("POST", data, true).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    followers() {
        let data = {
            "openId": wx.getStorageSync('openId'),
            "type":2
        }
        console.log(data)
        fans("POST", data, true).then(res => {
            console.log(res)
            console.log(res)
            this.data.follower = res.data
            console.log(JSON.parse(this.data.follower[0].userInfo).nickName)
        }).catch(err => {
            console.log(err)
        })
        
    },
    getFollower() {
        this.setData({
            isFan: false
        })
        this.followers()
    },
    getFan() {
        this.setData({
            isFan: true
        })
        this.fans()
    },
    care() {

        let data = {
            "fansId": "dfdaffad",
            "attentionId": "sdffesfsfwww",
            "type":1
        }
        console.log(data)
        dealFans("POST", data, true).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    dontCare1() {

        let data = {
            "fansId": "dfdaffad",
            "attentionId": "sdffesfsfwww",
            "type":2
        }
        console.log(data)
        dealFans("POST", data, true).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    dontCare2() {
        let data = {
            "fansId": "dfdaffad",
            "attentionId": "sdffesfsfwww",
            "type":2
        }
        console.log(data)
        dealFans("POST", data, true).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
})