import * as echarts from '../../components/ec-canvas/echarts'
const app = getApp();

Page({

  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {},
  onshow() {}
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