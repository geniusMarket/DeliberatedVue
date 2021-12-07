// pages/forum/questPut/uestPut.js
let app = getApp()
import {
    addQuestion,
    selectQuestion,
    addAnswer,
    selectAnswer,
    getScore,
    addScore,
    locationCode,
    getQuestionIsAccept,
    acceptAnswer
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
        rewardNum: [10, 20, 30],
        index: 0, //存储rewardNum的下标
        codeId: 0,
        codePath: "",
        questions: [],
        answers: [], //存储提问的回答
        answerInfo: [], // 回答提问者的个人信息
        questDetail: "",
        questNum: 0, //存储提问的数量
        questId: 0, //即将回答的问题的id 
        questTime: [], //存储问题提出的时间
        askerInfo: [], //存储提问者的用户信息
        answerDetail: "", //存储回复的具体内容
        answerReward: 0, //回答问题获得的奖励
        answerState: false, //记录问题回答框的状态
        answerQuest: "", //存储即将回答的问题内容
        openId: "",
        userInfo: "", //存储当前用户信息
        myQuestionId: '', // 从我的提问界面跳转进来时的questionId
        myQuestAnswer: [],  // 我的提问的回答
        myQuestAnswerInfo: [],  // 我的提问的回答者信息
        myQuestAccept: -1,  // 提问的采纳状态
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            openId: wx.getStorageSync('openId'),
            userInfo: JSON.parse(wx.getStorageSync('userInfo')),
            mode: options.mode
        })
        console.log("mode:", this.data.mode)
        if (this.data.mode == 1) {
            this.setData({
                codePath: app.globalData.codeId,
            })
            this.selectQuestion();
            this.readCode();
            this.getScore();
        } else {
            this.setData({
                myQuestionId: options.myQuestionId,
                myQuestCodeId: options.myQuestCodeId,
                myQuestDetail: options.myQuestDetail
            })
            console.log("myQuestionId", this.data.myQuestionId, "myQuestCodeId", this.data.myQuestCodeId)
            this.locationCode();
            this.selectMyQuestAnswer();
            this.getQuestionIsAccept();
            this.getScore();
        }

    },

    // 根据时间戳返回距今时间的事件
    timeTest(dateStr) {
        var timeNow = util.formatTime(new Date());
        timeNow = timeNow.replace(/-/g, '/');
        timeNow = Date.parse(timeNow);
        // console.log(timeNow);
        var diffValue = (timeNow - dateStr) / 1000;
        // console.log(diffValue);
        var diffDays = parseInt(diffValue / 86400);
        var diffHours = parseInt(diffValue / 3600);
        var diffMinutes = parseInt(diffValue / 60);
        var diffSeconds = parseInt(diffValue);
        if (diffDays > 365) return parseInt(diffDays / 365) + "年前";
        else if (diffDays > 30) return parseInt(diffDays / 30) + "月前";
        else if (diffDays > 10) return "一个月内";
        else if (diffDays > 0) return diffDays + "天前";
        else if (diffHours > 0) return diffHours + "小时前";
        else if (diffMinutes > 0) return diffMinutes + "分钟前";
        else return diffSeconds + "秒前";
    },

    readCode: function () { //获取源码
        let data = {
            "path": this.data.codePath
        }
        readCode("POST", data, true).then(res => {
            console.log("获取源码部分：", res)
            this.setData({
                VueCode: res.data.code,
                codeId: res.data.codeId
            })
            console.log(this.data.codeId)
            this.selectQuestion();
        }).catch(err => {
            console.log("获取源码部分：", err)
        })
    },

    rewardPickListener: function (e) {
        this.setData({
            index: e.detail.value
        })
    },

    // 获取提问内容
    questGet(e) {
        this.setData({
            questDetail: e.detail.value,
        })
    },
    // 添加问题
    addQuestion() {
        let data = {
            "openId": this.data.openId,
            "title": "",
            "detail": this.data.questDetail,
            "codeId": this.data.codeId,
            "reward": this.data.rewardNum[this.data.index],
        }

        addQuestion("POST", data, true).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    },
    // 发表问题
    questPut() {
        console.log(this.data.myScore)
        if (this.data.myScore >= this.data.rewardNum[this.data.index]) {
            if (this.data.questDetail) {
                this.addQuestion();
                this.selectQuestion();
                this.addScore(wx.getStorageSync('openId'), this.data.rewardNum[this.data.index], 2);
                this.setData({
                    questDetail: ""
                })
            } else wx.showToast({
                title: '问题内容不能为空',
                icon: 'none'
            })
        } else wx.showToast({
            title: '积分余额不足',
            icon: 'none'
        })
        this.getScore();
    },
    // 查找问题，即获取问题列表
    selectQuestion() {
        let data = {
            "type": 3,
            "detail": "",
            "codeId": this.data.codeId
        }
        selectQuestion("POST", data, true).then(res => {
            this.setData({
                questions: res.data,
                questNum: res.data.length,
            })
            for (var i = 0; i < this.data.questNum; i++) {
                this.selectAnswer(this.data.questions[i].data.questionId, i);
                this.data.questTime[i] = this.timeTest(this.data.questions[i].data.createTime);
                this.data.askerInfo[i] = JSON.parse(this.data.questions[i].user.userInfo)
            }
            this.setData({
                questTime: this.data.questTime,
                askerInfo: this.data.askerInfo,
            })
            console.log("questions", this.data.questions)
            console.log("askerInfo", this.data.askerInfo)
            console.log("answers", this.data.answers)
            console.log("answerInfo", this.data.answerInfo)
        }).catch(err => {
            console.log(err);
        })
    },

    // 添加问题的回答，即回复提问
    addAnswer() {
        let data = {
            "answerer": this.data.openId,
            "questionId": this.data.questId,
            "detail": this.data.answerDetail,
            "reward": this.data.answerReward,
        }
        addAnswer("POST", data, true).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    },
    //回答问题
    answerQuestion() {
        this.addAnswer();
        this.setData({
            answerState: false,
        })
        this.selectQuestion();
    },
    // 显示回答问题框
    showAnswerQuest(e) {
        var index = e.currentTarget.dataset.index
        this.setData({
            answerState: true,
            answerQuest: this.data.questions[index].data.detail,
            questId: this.data.questions[index].data.questionId,
            answerReward: this.data.questions[index].data.reward,
        })
    },
    closeAnswerQuest() {
        this.setData({
            answerState: false,
        })
    },
    // 获取回答的具体内容
    answerGet(e) {
        this.setData({
            answerDetail: e.detail.value
        })
    },

    // 查找某个问题的回答 用于提问模块
    selectAnswer(questId, index) {
        let data = {
            "questionId": questId,
        }
        selectAnswer("POST", data, true).then(res => {
            this.data.answers[index] = res.data
            this.setData({
                answers: this.data.answers,
            })
            this.data.answerInfo[index] = new Array()
            for (var i = 0; i < res.data.length; i++) {
                this.data.answerInfo[index][i] = JSON.parse(res.data[i].user.userInfo)
            }
            this.setData({
                answerInfo: this.data.answerInfo,
            })
        }).catch(err => {
            console.log(err);
        })
    },

    //查找某个问题的回答，我的提问模块
    selectMyQuestAnswer() {
        let data = {
            "questionId": this.data.myQuestionId,
        }
        selectAnswer("POST", data, true).then(res => {
            this.setData({
                myQuestAnswer: res.data
            })
            for(var i = 0; i < res.data.length; i++){
                this.data.myQuestAnswerInfo[i] = JSON.parse(res.data[i].user.userInfo)
            }
            this.setData({
                myQuestAnswerInfo: this.data.myQuestAnswerInfo
            })
            console.log("myQuestAnswer",this.data.myQuestAnswer);
            console.log("myQuestAnswerInfo", this.data.myQuestAnswerInfo)
        }).catch(err => {
            console.log(err);
        })
    },

    // 长按采纳功能
    myQuestAnswerAdopt(e) {
        this.getQuestionIsAccept();
        var index = e.currentTarget.dataset.index
        var that = this
        wx.showModal({
            title: '确定采纳该回答吗？',
            content: '每个问题仅能采纳一个回答',
            success(res) {
                if (res.confirm && that.data.myQuestAccept == -1){
                    that.acceptAnswer(that.data.myQuestAnswer[index].data.answerId)
                    that.addScore(that.data.myQuestAnswer[index].data.answerer,that.data.myQuestAnswer[index].data.reward,1)
                    that.getQuestionIsAccept();
                    console.log("myQuestAccept",that.data.myQuestAccept)
                }else if(res.confirm && that.data.myQuestAccept != -1){
                    wx.showToast({
                      title: '该问题已有采纳答案',
                      icon:'none'
                    })
                }
            }
        })
    },

    // 获取用户积分
    getScore() {
        let data = {
            "openId": wx.getStorageSync('openId')
        }
        getScore("POST", data, true).then(res => {
            this.setData({
                myScore: res.score
            })
        }).catch(err => {
            console.log(err);
        })
    },

    // 增减用户积分
    addScore(openId,reward, type) {
        let data = {
            "openId": openId,
            "reward": reward,
            "type": type
        }
        addScore("POST", data, true).then(res => {
            console.log('addScore 结果', res);
        }).catch(err => {
            console.log(err);
        })
    },

    //   通过codeId获取源码路径
    locationCode: function () {
        let data = {
            "codeId": this.data.myQuestCodeId
        }
        locationCode("POST", data, true).then(res => {
            this.setData({
                codePath: res.data.filePath
            })
            this.readCode();
        }).catch(err => {
            console.log("获取源码路径", err)
        })
    },

    // 根据questionId获取问题的状态
    getQuestionIsAccept(){
        let data = {
            "questionId": this.data.myQuestionId
        }
        getQuestionIsAccept("POST", data, true).then(res => {
            this.setData({
                myQuestAccept: res.accept
            })
        }).catch(err => {
            console.log(err)
        })
    },
    // 采纳回答
    acceptAnswer(answerId){
        let data = {
            "questionId": this.data.myQuestionId,
            "answerId": answerId
        }
        console.log("acceptAnswer",data)
        acceptAnswer("POST", data, true).then(res => {
            console.log('采纳回答',res)
        }).catch(err => {
            console.log(err)
        })
    },
})