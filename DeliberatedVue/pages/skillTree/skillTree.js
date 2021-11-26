import * as echarts from '../../components/ec-canvas/echarts'
import {
  login
} from "../../api/login"
const app = getApp();

Page({

  data: {
    ec: {
      onInit: initChart
    },
    // 以下登录相关
    code: "",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: true,
    userInfo: wx.getStorageSync('userInfo'),
    showModal: false,
    userName:app.globalData.userName,
    userImage:app.globalData.userImage,
    canIUseGetUserProfile:false,
    hasUserInfo: false
  },
  onLoad() {
    if(wx.getStorageSync('userInfo').length == 0) {
      this.setData({
        hasUserInfo: false
      })
    } else {
      this.setData({
        hasUserInfo: true
      })
    }
    if (wx.getUserInfo) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getCode()
  },
  onReady() {},
  onshow() {},
  login() {
    let data = {
        "code": this.data.code,
        "userProfile": this.data.userInfo
    }
    login("POST", JSON.stringify(data), true).then(res => {
      console.log(res)
      wx.setStorageSync('openId', res.openId)
    }).catch(err => {
      console.log(err)
    })
  },
  getCode() {
    const _this = this
    wx.login({
      success: res => {
        console.log(res.code)
        _this.setData({
          code: res.code
        })
        console.log(_this.data.code)
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  getUserInfo() {
    let _this = this
    wx.getUserProfile({
      desc: '用户登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        _this.setData({
          userInfo: res.rawData,
          hasUserInfo: true
        })
        wx.setStorageSync('userInfo', res.rawData)
        _this.login()
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
});

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var data1 = {
    "name": "Vue",
    "children": [{
      "name": "混合"
    }, {
      "name": "组件"
    }, {
      "name": "方法与事件修饰器"
    }, {
      "name": "列表渲染"
    }, {
      "name": "class与style绑定"
    }, {
      "name": "条件渲染"
    }, {
      "name": "深入式响应原理"
    }, {
      "name": "过滤器"
    }, {
      "name": "路由"
    }, {
      "name": "状态管理"
    }, {
      "name": "总体特性"
    }]
  };

  var option = {
    series: [{
      type: 'tree',

      initialTreeDepth: 1,

      name: 'skillTree',

      data: [data1],

      top: '5%',
      left: '10%',
      bottom: '2%',
      right: '20%',

      symbolSize: 17.5,
      symbol: 'circle',

      label: {
        normal: {
          position: 'top',
          verticalAlign: 'bottom',
          align: 'middle',
          color: 'white',

        },
        textStyle: {
          fontSize: 30
        }
      }


    }]
  };

  chart.setOption(option);
  chart.on("click", function treeNodeclick(param) {
    /* true 代表点击的是圆点
       fasle 表示点击的是当前节点的文本
    */

    if (param.event.target.culling === true) {
      let name = param.data.name;
      let args = param.data; //当前节点及其子节点的值
      let level = param.data.level; //当前节点的层级 
      if (name != "Vue") {
        wx.navigateTo({
          url: 'childrenTree/childrenTree',
        })
      }
    } else if (param.event.target.culling === false) {
      let args = param.data; //当前节点及其子节点的值
      let level = param.data.level; //当前节点的层级 eg:"1-1-0",可以通过level判断当前的层级，从而进行不同的操作
      if (name != "Vue") {
        wx.navigateTo({
          url: 'childrenTree/childrenTree',
        })
      }
    }
  })
  return chart;
};