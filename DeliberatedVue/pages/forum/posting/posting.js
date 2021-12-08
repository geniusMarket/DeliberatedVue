// pages/forum/posting/posting.js
import {
	addArticle
} from "../../../api/forum"
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		detail: "",
		title: "",
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},
	// 发布一个帖子或修改帖子
	addArticle() {
		let data = {
			"author": wx.getStorageSync('openId'),
			"title": this.data.title,
			"detail": this.data.detail,
			"codeId": 0,
			"type": 1
		}
		addArticle("POST", data, true).then(res => {
			console.log(res)
			wx.showToast({
			  title: '发布成功',
			})
		}).catch(err => {
			console.log(err)
		})
	},

	// 获取帖子具体内容
	detailInput: function (e) {
		this.setData({
			detail: e.detail.value
		})
	},
	// 获取帖子标题
	titleInput: function (e) {
		this.setData({
			title: e.detail.value,
		})
	},
	// 发布帖子
	sendPost() {
		if (this.data.title && this.data.detail) {
			this.addArticle();
			wx.switchTab({
			  url: '../forum',
			})
		} else if (this.data.title) wx.showToast({
			title: '帖子的内容不能为空',
			icon: 'none'
		})
		else if (this.data.detail) wx.showToast({
			title: '帖子的标题不能为空',
			icon: 'none'
		})
		else wx.showToast({
			title: '帖子的标题和内容均不能为空',
			icon: 'none'
		})
	}
})