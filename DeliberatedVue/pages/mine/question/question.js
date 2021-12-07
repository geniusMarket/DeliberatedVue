// pages/mine/question/question.js
import {
    getQuestion
} from "../../../api/mine";

import {
    delQuestion,
    locationCode
} from "../../../api/forum";

import {
    readCode
} from "../../../api/test";

var util = require("../../../utils/util");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        question: [],
        questionTime: [], //存储提问的发布时间
        userInfo: [],
        codeId: [],
        isShow: true,
        VueCode:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getQuestion()
        this.setData({
            userInfo: JSON.parse(wx.getStorageSync('userInfo'))
        })
    },

    // 获取提问列表
    getQuestion() {
        let data = {
            "openId": wx.getStorageSync('openId')
        }
        console.log(data)
        getQuestion("POST", data, true).then(res => {
            this.setData({
                question: res.data,
                isShow: false
            })
            for(var i = 0; i < this.data.question.length; i++){
                this.data.codeId[i] = this.data.question[i].codeId
                this.data.questionTime[i] = this.timeTest(this.data.question[i].createTime)
            };
            this.setData({
                codeId: this.data.codeId,
                questionTime: this.data.questionTime
            })
            console.log("question", this.data.question)
            console.log("codeId",this.data.codeId)
            for(var i = 0; i < this.data.codeId.length; i++){
                this.locationCode(i);
            }
        }).catch(err => {
            console.log(err)
        })
        this.setData({
            isShow: true
        })
    },

    // 删除问题
    delQuestion(index) {
        let data = {
            "questionId": this.data.question[index].questionId
        }
        delQuestion("POST", data, true).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        this.getQuestion();
    },

    // 删除问题确定弹窗
    deleteToast(e) {
        var that = this;
        wx.showModal({
            title: '确定删除该提问吗？',
            success: function (res) {
                if (res.confirm) that.delQuestion(e.currentTarget.dataset.index);
            }
        })
    },

    readCode: function (codePath,index) { //获取源码
        let data = {
            "path": codePath
        }
        console.log(data)
        readCode("POST", data, true).then(res => {
            console.log("获取源码部分：", index, res)
            this.data.VueCode[index] = res.data.code
            this.setData({
                VueCode: this.data.VueCode
            })
        }).catch(err => {
            console.log("获取源码部分：", err)
        })
    },

    //   通过codeId获取源码路径
    locationCode: function (index) { 
        let data = {
            "codeId": this.data.codeId[index]
        }
        locationCode("POST", data, true).then(res => {
            this.readCode(res.data.filePath,index)
            console.log("源码路径", res.data.filePath)
        }).catch(err => {
            console.log("获取源码路径", err)
        })
    },

    timeTest(dateStr) {
        var timeNow = util.formatTime(new Date(dateStr));
        timeNow = timeNow.replace(/-/g, '/');
        return timeNow
    },
})