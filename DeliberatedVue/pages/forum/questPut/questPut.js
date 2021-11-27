// pages/forum/questPut/uestPut.js
let app = getApp()
import {
    addQuestion,selectQuestion,addAnswer,selectAnswer
} from "../../../api/forum"
import {
    readCode
  } from "../../../api/test";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        rewardNum: [10, 20, 30],
        index: 0,
        codeId: 0,
        questions: [],
        answers:[],
        questDetail:"",
        questNum: 0, //存储提问的数量
        questId: 0, //即将回答的问题的id 
        answerDetail:"",//存储回复的具体内容
        answerReward: 0, //回答问题获得的奖励
        answerState: false, //记录问题回答框的状态
        answerQuest:"", //存储即将回答的问题内容
        VueCode:'',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.codeId  = app.globalData.codeId
        this.setData({
          codeId:this.codeId
          })
        this.selectQuestion();
        this.readCode();
    },

    rewardPickListener: function (e) {
        this.setData({
            index: e.detail.value
        })
    },

    readCode: function () { //获取源码
        let data = {
          "path": this.data.codeId
        }
        readCode("POST", data, true).then(res => {
          console.log("获取源码部分：", res)
          // console.log(res.data.codeId)
          this.setData({
            VueCode: res.data.code
          })
          console.log(this.data.VueCode)
        }).catch(err => {
          console.log("获取源码部分：", err)
        })
      },

    // 添加问题
    addQuestion() {
        let data = {
            "openId": "attention_456",
            "title": "",
            "detail":this.data.questDetail,
            "codeId":"0",
            "reward":this.data.rewardNum[this.data.index],
        }
        addQuestion("POST", data, true).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    },
    // 发表问题
    questPut(){
        this.addQuestion();
        this.selectQuestion();
    },

    // 获取提问内容
    questGet(e){
        this.setData({
            questDetail:e.detail.value,
        })
    },

    // 查找问题，即获取问题列表
    selectQuestion(){
        let data = {
            "type": 1,
            "detail":'%',
        }
        selectQuestion("POST", data, true).then(res => {
            this.setData({
                questions: res.data,
                questNum: res.data.length,
            })
            for(var i = 0; i < this.data.questNum; i++){
                this.selectAnswer(this.data.questions[i].data.questionId,i)
            }
            console.log(this.data.questions)
            console.log("answers",this.data.answers)
        }).catch(err => {
            console.log(err);
        })
    },

    // 添加问题的回答，即回复提问
    addAnswer(){
        let data = {
            "answerer":'fans_123',
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
    answerQuestion(){
        this.addAnswer();
        this.setData({
            answerState:false,
        }) 
        this.selectQuestion();
    },
    // 显示回答问题框
    showAnswerQuest(e){
        var index = e.currentTarget.dataset.index
        this.setData({
            answerState: true,
            answerQuest:this.data.questions[index].data.detail,
            questId: this.data.questions[index].data.questionId,
            answerReward: this.data.questions[index].data.reward,
        })
    },
    closeAnswerQuest(){
        this.setData({
            answerState: false,
        })
    },
    // 获取回答的具体内容
    answerGet(e){
        this.setData({
            answerDetail: e.detail.value
        })
    },

    // 查找某个问题的回答
    selectAnswer(questId,index){
        let data = {
            "questionId": questId,
        }
        selectAnswer("POST", data, true).then(res => {
            this.data.answers[index] = res.data
            this.setData({
                answers: this.data.answers
            })
        }).catch(err => {
            console.log(err);
        })
    },
})