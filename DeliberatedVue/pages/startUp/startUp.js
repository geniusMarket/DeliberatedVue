// pages/startUp/startUp.js
// 获取应用实例
// const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  onLoad: function (options) {
    setTimeout(() => {
    this.fadeOut(2000)
    }, 2500)
  },

  fadeOut(duration) {
    this.animate( '#startup', [
      { opacity: 1.0},
      { opacity: 0.5},
      { opacity: 0.0}
    ], duration, () => {
      wx.switchTab({
        url: '/pages/skillTree/skillTree'
      })
    })
  }

})