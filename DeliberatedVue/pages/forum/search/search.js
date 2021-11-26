// pages/forum/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchRes: [
            {
                id: '10030',
                title: 'Vue.js是什么'
            },
            {
                id: '1',
                title: '混入对象可以包含哪些组件选项'
            },
            {
                id: '2',
                title: '如何使用Vue.js事件处理器'
            },
            {
                id: '3',
                title: 'Vue.js模板语法'
            }
        ],
        postList: [
            {
                title:'什么是条件与循环？'
            },
            {
                title:'条件渲染是什么？'
            },
            {
                title:'如何进行组件化应用构建？'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    toDetail(e) {
        console.log(e.currentTarget.dataset.resid)
        wx.navigateTo({
          url: '../details/details?resid=' + e.currentTarget.dataset.resid
        })
    }
})