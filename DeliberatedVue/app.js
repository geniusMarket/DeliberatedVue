// app.js
App({

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    let _self = this;
    wx.getSystemInfo({
      success: res => {
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          _self.globalData.isIphoneX = true
        }
        wx.setStorageSync('modelmes', modelmes)
        
      }
    })
  },
  globalData: {
    userInfo: null,
    isIphoneX: null,
    codeId:0,
    VueCode:'',
    reply:''  // 回复
  }
})
