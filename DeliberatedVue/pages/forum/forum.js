// pages/forum/forum.js
import {
	selectArticle
} from "../../api/forum"
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		postList: [],
		userInfo: "",
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			userInfo: JSON.parse(wx.getStorageSync('userInfo')),
		})
		console.log(this.data.userInfo)
	},

	onShow: function () {
		this.selectArticle(false)
	},

	onPullDownRefresh() {
		// 下拉刷新
		this.selectArticle(true);
	},

	// 查询帖子，获取所有的帖子列表  showRefresh：当刷新触发selectArticle函数时显示‘已刷新’
	selectArticle(showRefresh) {
		let data = {
			"type": "all",
			"request": "",
			"openId": wx.getStorageSync('openId')
		}
		var that = this
		selectArticle("POST", data, false).then(res => {
			that.setData({
				postList: res.data,
				likesRecord: res.likesRecord
			})
			console.log("postList", this.data.postList)
			console.log("LikesRecord", this.data.likesRecord)
			if(showRefresh){
				wx.stopPullDownRefresh()
				setTimeout(function(){
					wx.showToast({
						title: '已刷新',
					})
				},500)	
			}
		}).catch(err => {
			console.log(err)
		})
	},

	gotoDetails(e) {
		var index = e.currentTarget.dataset.index
		wx.navigateTo({
			url: 'details/details?articleId=' + this.data.postList[index].data.articleId + '&likesArticle=' + this.data.likesRecord[index] + '',
		})
	}
})