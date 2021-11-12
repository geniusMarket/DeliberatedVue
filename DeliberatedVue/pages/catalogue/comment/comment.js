// pages/catalogue/comment/comment.js
var inputValue = ""
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_like:true,
    username:"深思熟Vue",
    comment_text:"更新节点,全量的属性更新,如果新老节点都有孩子，则递归执行 diff,如果新节点有孩子，老节点没孩子，则新增新节点的这些孩子节点,如果老节点有孩子，新节点没孩子，则删除老节点的这些孩子,更新文本节点",
    ellipsis: true, // 文字是否收起，默认收起
    is_show:"展开",
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    inputValue = e.detail.value
    console.log(inputValue)
  },
  /**
   * 收起/展开按钮点击事件
   */
  ellipsis: function () {  
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value,
    }) 
    if(!value){
      this.setData({
        is_show:"收起"
      })
    }
    else{
      this.setData({
        is_show:"展开"
      })
    }
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