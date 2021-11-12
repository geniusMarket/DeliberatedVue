// pages/skillTree/childrenTree/childrenTree.js
import * as echarts from '../../../components/ec-canvas/echarts';
let app = getApp()
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

  onLoad () {

    
  }

});

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var data1 = {
    "name": "混合",
    "children": [{
      "name": "test1",
      "children": [{
        "name": "a1",
        "children": [{
          "name": "b1"
        }, {
          "name": "b2"
        }, {
          "name": "b3"
        }, {
          "name": "b4"
        }]
      }, {
        "name": "a2"
      }, {
        "name": "a3"
      }, {
        "name": "a4"
      }]
    }, {
      "name": "test2",
      "children": [{
        "name": "b1"
      }, {
        "name": "b2"
      }, {
        "name": "b3"
      }, {
        "name": "b4"
      }]
    }, {
      "name": "test3",
      "children": [{
        "name": "c1"
      }]
    }]
  };

  var option = {
    series: [{
      type: 'tree',

      initialTreeDepth: 1,

      name: 'skillTree',

      data: [data1],

      top: '3%',
      left: '10%',
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
  };

  chart.setOption(option);
  chart.on("click", function treeNodeclick(param) {
    /* true 代表点击的是圆点
       fasle 表示点击的是当前节点的文本
    */

    if (param.event.target.culling === true) {
      let args = param.data; //当前节点及其子节点的值
      let level = param.data.level; //当前节点的层级 
      

    } else if (param.event.target.culling === false) {
      let args = param.data; //当前节点及其子节点的值
      let level = param.data.level; //当前节点的层级 eg:"1-1-0",可以通过level判断当前的层级，从而进行不同的操作
      
    }
  })
  return chart;
};
