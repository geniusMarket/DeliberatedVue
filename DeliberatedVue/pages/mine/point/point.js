// pages/mine/point/point.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        point:[
            {
                date:'2021年11月',
                detail:[
                    {
                        type:1,
                        time:'11月2日 13：00',
                        pointChanged:'+10',
                        pointRemain:'130'
                    },
                    {
                        type:2,
                        time:'11月2日 12：10',
                        pointChanged:'+20',
                        pointRemain:'120'
                    },
                    {
                        type:3,
                        time:'11月1日 11：20',
                        pointChanged:'-30',
                        pointRemain:'100'
                    }
                ]
            },
            {
                date:'2021年10月',
                detail:[
                    {
                        type:1,
                        time:'10月2日 13：00',
                        pointChanged:'+10',
                        pointRemain:'130'
                    },
                    {
                        type:2,
                        time:'10月2日 12：10',
                        pointChanged:'+20',
                        pointRemain:'120'
                    },
                    {
                        type:3,
                        time:'10月1日 11：20',
                        pointChanged:'-30',
                        pointRemain:'100'
                    }
                ]
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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