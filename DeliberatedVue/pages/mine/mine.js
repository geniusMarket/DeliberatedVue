// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    myInfo: {
      intro: '个人简介',
      follower: '',
      fans: '',
      points: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: JSON.parse(wx.getStorageSync('userInfo'))
    })
    // console.log(this.data.userInfo.avatarUrl)
  },
  toEdit() {
    wx.navigateTo({
      url: '../mine/edit/edit',
    })
  },
  toFan() {
    wx.navigateTo({
      url: '../mine/fan/fan?isFan=true',
    })
  },
  toFollower() {
    wx.navigateTo({
      url: '../mine/fan/fan?isFan=false',
    })
  },
  toPoint() {
    wx.navigateTo({
      url: '../mine/point/point',
    })
  },
  toFavorite() {
    wx.navigateTo({
      url: '../mine/favorite/favorite',
    })
  },
  toQuestion() {
    wx.navigateTo({
      url: '../mine/question/question',
    })
  },
  toHistory() {
    wx.navigateTo({
      url: '../mine/history/history',
    })
  },
})