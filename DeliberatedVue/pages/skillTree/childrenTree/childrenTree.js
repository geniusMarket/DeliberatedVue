// pages/skillTree/childrenTree/childrenTree.js
import * as echarts from '../../../components/ec-canvas/echarts';
let app = getApp()
var name

var tree
var data1
var data2
var data3
var data4
var data5
var data6
var data7
var data8
var data9
var data10

var section
let normalColor = "#293360"
let lightUpColor = "#fefefd"

var chart
var option

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {
      "color": "#000000",
      "selectedColor": "#41b833",
      "list": [{
          "selectedIconPath": "/icon/selectedSkillTree.png",
          "iconPath": "/icon/skillTree.png",
          "pagePath": "/pages/skillTree/skillTree",
          "text": "技能树"
        },

        {
          "selectedIconPath": "/icon/selectedCatalogue.png",
          "iconPath": "/icon/catalogue.png",
          "pagePath": "/pages/catalogue/catalogue",
          "text": "源码阅读"
        },
        {
          "selectedIconPath": "/icon/selectedForum.png",
          "iconPath": "/icon/forum.png",
          "pagePath": "/pages/forum/forum",
          "text": "社区"
        },
        {
          "selectedIconPath": "/icon/selectedMine.png",
          "iconPath": "/icon/mine.png",
          "pagePath": "/pages/mine/mine",
          "text": "个人中心"
        }
      ]
    },
    //适配IphoneX的屏幕底部横线
    isIphoneX: app.globalData.isIphoneX,

    ec: {
      onInit: initChart
    },

    type: 'a',

  },
  tabChange: function (e) {
    var index = e.detail.index
    console.log(index)
    switch (index) {
      case 1:
        wx.switchTab({
          url: '/pages/catalogue/catalogue',
        })
        break;
      case 2:
        wx.switchTab({
          url: '/pages/forum/forum',
        })
        break;
      case 3:
        wx.switchTab({
          url: '/pages/mine/mine',
        })
        break;
    }
  },

  onLoad: function (options) {
    name = options.name

  },

  onShow: function () {
    console.log("11111")
    tree = wx.getStorageSync('skillTree');

    data1 = this.isLightUp(tree[1])
    data2 = this.isLightUp(tree[2])
    data3 = this.isLightUp(tree[3])
    data4 = this.isLightUp(tree[4])
    data5 = this.isLightUp(tree[5])
    data6 = this.isLightUp(tree[6])
    data7 = this.isLightUp(tree[7])
    data8 = this.isLightUp(tree[8])
    data9 = this.isLightUp(tree[9])
    data10 = this.isLightUp(tree[10])
    tree = [tree[0], data1, data2, data3, data4, data5, data6, data7, data8, data9, data10]
    wx.setStorageSync('skillTree', tree)
    initOption()
    chart.setOption(option)
  },
  onUnload: function () {
    wx.reLaunch({
      url: '/pages/skillTree/skillTree'
    })
  },
  isLightUp(data) {

    if (wx.getStorageSync(data.name) > data.childNum && data.isLightUp == 0) {
      data.itemStyle.color = lightUpColor
      data.isLightUp = 1
      var num = wx.getStorageSync(data.father)
      if (num > 0) {
        num += 1
      } else {
        num = 2
      }
      wx.setStorageSync(data.father, num)
    }
    if (data.childNum > 0) {
      for (let i = 0; i < data.childNum; i++) {
        data.children[i] = this.isLightUp(data.children[i])
      }
    }
    return data
  }

});

function initChart(canvas, width, height, dpr) {
  
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr, // new
  });
  canvas.setChart(chart);
  
  initOption();

  chart.setOption(option);
  chart.on("click", function treeNodeclick(param) {
    /* true 代表点击的是圆点
       fasle 表示点击的是当前节点的文本
    */

    if (param.event.target.culling === true) {
      let args = param.data; //当前节点及其子节点的值
      let level = param.dataIndex; //当前节点的层级 
      console.log(param.data)
      if (param.data.children == null) {
        app.globalData.codeId = param.data.codeId
        wx.navigateTo({
          url: '/pages/catalogue/code/code?name=' + param.data.name + '&father=' + param.data.father + '&isLightUp=' + param.data.isLightUp + '&section=' + section
        });
      }

    } else if (param.event.target.culling === false) {
      let args = param.data; //当前节点及其子节点的值
      let level = param.data.level; //当前节点的层级 eg:"1-1-0",可以通过level判断当前的层级，从而进行不同的操作
      if (param.data.children == null) {
        app.globalData.codeId = param.data.codeId
        wx.navigateTo({
          url: '/pages/catalogue/code/code?name=' + param.data.name + '&father=' + param.data.father + '&isLightUp=' + param.data.isLightUp + '&section=' + section
        });
      }
    }
  })
  return chart;
};

function initOption(){
  var treeData;
  switch (name) {
    case "组件":
      treeData = data1
      section = 1
      break;
    case "class与style绑定":
      treeData = data2
      section = 2
      break;
    case "渲染":
      treeData = data3
      section = 3
      break;
    case "事件处理":
      treeData = data4
      section = 4
      break;
    case "混合":
      treeData = data5
      section = 5
      break;
    case "表单输入绑定":
      treeData = data6
      section = 6
      break;
    case "过滤器":
      treeData = data7
      section = 7
      break;
    case "插件":
      treeData = data8
      section = 8
      break;
    case "渲染函数":
      treeData = data9
      section = 9
      break;
    case "自定义指令":
      treeData = data10
      section = 10
      break;
  }
  option = {
    series: [{
      type: 'tree',
  
      initialTreeDepth: 1,
  
      name: 'skillTree',
      
      data: [treeData],
  
      top: '3%',
      left: '15%',
      bottom: '10%',
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
  }
}