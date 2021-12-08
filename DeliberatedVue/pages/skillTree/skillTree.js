import * as echarts from '../../components/ec-canvas/echarts'
import {
  login
} from "../../api/login"
let util = require("../../utils/util")
const app = getApp();
let normalColor = "#293360"
let lightUpColor = "#fefefd"
let data0 = {
  name: "Vue",
  isLightUp: 0,
  childNum: 10,
  lightUpNum: 0,
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "组件",
    isLightUp: 0,
    childNum: 7,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }, {
    name: "class与style绑定",
    isLightUp: 0,
    childNum: 2,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }, {
    name: "渲染",
    isLightUp: 0,
    childNum: 2,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }, {
    name: "事件处理",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }, {
    name: "混合",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }, {
    name: "表单输入绑定",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }, {
    name: "过滤器",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }, {
    name: "插件",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }, {
    name: "渲染函数",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }, {
    name: "自定义指令",
    isLightUp: 0,
    childNum: 5,
    lightUpNum: 0,
    father: "Vue",
    itemStyle: {
      color: normalColor
    }
  }]
}
let data1 = {
  name: "组件",
  isLightUp: 0,
  childNum: 7,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
      name: "组件基础",
      isLightUp: 0,
      childNum: 2,
      lightUpNum: 0,
      father: "组件",
      itemStyle: {
        color: normalColor
      },
      children: [{
        name: "events.js",
        codeId: "src\\\\core\\\\instance\\\\events.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件基础",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "cextract-props.js",
        codeId: "src\\\\core\\\\vdom\\\\helpers\\\\extract-props.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件基础",
        itemStyle: {
          color: normalColor
        },
      }]
    }, {
      name: "组件创建",
      isLightUp: 0,
      childNum: 4,
      lightUpNum: 0,
      father: "组件",
      itemStyle: {
        color: normalColor
      },
      children: [{
        name: "assets.js",
        codeId: "src\\\\core\\\\global-api\\\\assets.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件创建",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "create-component.js",
        codeId: "src\\\\core\\\\vdom\\\\create-component.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件创建",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "create-element.js",
        codeId: "src\\\\core\\\\vdom\\\\create-element.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件创建",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "options.js",
        codeId: "src\\\\core\\\\util\\\\options.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件创建",
        itemStyle: {
          color: normalColor
        },
      }]
    }, {
      name: "props",
      isLightUp: 0,
      childNum: 5,
      lightUpNum: 0,
      father: "组件",
      itemStyle: {
        color: normalColor
      },
      children: [{
        name: "extract-props.js",
        codeId: "src\\\\core\\\\vdom\\\\helpers\\\\extract-props.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "props",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "init.js",
        codeId: "src\\\\core\\\\instance\\\\init.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "props",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "options.js",
        codeId: "src\\\\core\\\\util\\\\options.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "props",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "props.js",
        codeId: "src\\\\core\\\\util\\\\props.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "props",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "state.js",
        codeId: "src\\\\core\\\\instance\\\\state.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "props",
        itemStyle: {
          color: normalColor
        },
      }]
    },
    {
      name: "插槽",
      isLightUp: 0,
      childNum: 6,
      lightUpNum: 0,
      father: "组件",
      itemStyle: {
        color: normalColor
      },
      children: [{
        name: "parser/index.js",
        codeId: "src\\\\compiler\\\\parser\\\\index.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "插槽",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "codegen/index.js",
        codeId: "src\\\\compiler\\\\codegen\\\\index.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "插槽",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "init.js",
        codeId: "src\\\\core\\\\instance\\\\init.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "插槽",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "render-slot.js",
        codeId: "src\\\\core\\\\instance\\\\render-helpers\\\\render-slot.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "插槽",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "render.js",
        codeId: "src\\\\core\\\\instance\\\\render.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "插槽",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "render-slots.js",
        codeId: "src\\\\core\\\\instance\\\\render-helpers\\\\render-slots.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "插槽",
        itemStyle: {
          color: normalColor
        },
      }]
    },
    {
      name: "作用域插槽",
      isLightUp: 0,
      childNum: 3,
      lightUpNum: 0,
      father: "组件",
      itemStyle: {
        color: normalColor
      },
      children: [{
        name: "parser/index.js",
        codeId: "src\\\\compiler\\\\parser\\\\index.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "作用域插槽",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "codegen/index.js",
        codeId: "src\\\\compiler\\\\codegen\\\\index.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "作用域插槽",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "render-slot.js",
        codeId: "src\\\\core\\\\instance\\\\render-helpers\\\\render-slot.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "作用域插槽",
        itemStyle: {
          color: normalColor
        },
      }]
    },
    {
      name: "异步组件",
      isLightUp: 0,
      childNum: 2,
      lightUpNum: 0,
      father: "组件",
      itemStyle: {
        color: normalColor
      },
      children: [{
        name: "create-component.js",
        codeId: "src\\\\core\\\\vdom\\\\create-component.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "异步组件",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "resolve-async-component.js",
        codeId: "src\\\\core\\\\vdom\\\\helpers\\\\resolve-async-component.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "异步组件",
        itemStyle: {
          color: normalColor
        },
      }]
    },
    {
      name: "自定义事件",
      isLightUp: 0,
      childNum: 6,
      lightUpNum: 0,
      father: "组件",
      itemStyle: {
        color: normalColor
      },
      children: [{
        name: "create-component.js",
        codeId: "src\\\\core\\\\vdom\\\\create-component.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "instance/events.js",
        codeId: "src\\\\core\\\\instance\\\\events.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "codegen/events.js",
        codeId: "src\\\\compiler\\\\codegen\\\\events.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "helpers.js",
        codeId: "src\\\\compiler\\\\helpers.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "index.js",
        codeId: "src\\\\compiler\\\\parser\\\\index.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件",
        itemStyle: {
          color: normalColor
        },
      }, {
        name: "init.js",
        codeId: "src\\\\core\\\\instance\\\\init.js",
        isLightUp: 0,
        childNum: 0,
        lightUpNum: 0,
        father: "组件",
        itemStyle: {
          color: normalColor
        },
      }]
    }
  ]
}
let data2 = {
  name: "class与style绑定",
  isLightUp: 0,
  childNum: 2,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "绑定class",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "class与style绑定",
    itemStyle: {
      color: normalColor
    },
    children: [{
      name: "modules/class.js",
      codeId: "src\\\\platforms\\\\web\\\\runtime\\\\modules\\\\class.js",
      isLightUp: 0,
      childNum: 0,
      lightUpNum: 0,
      father: "绑定class",
      itemStyle: {
        color: normalColor
      },
    }]
  }, {
    name: "绑定style",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "class与style绑定",
    itemStyle: {
      color: normalColor
    },
    children: [{
      name: "modules/style.js",
      codeId: "src\\\\platforms\\\\web\\\\runtime\\\\modules\\\\style.js",
      isLightUp: 0,
      childNum: 0,
      lightUpNum: 0,
      father: "绑定style",
      itemStyle: {
        color: normalColor
      },
    }]
  }]
}
let data3 = {
  name: "渲染",
  isLightUp: 0,
  childNum: 1,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "条件渲染",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "渲染",
    itemStyle: {
      color: normalColor
    },
    children: [{
      name: "codegen/index.js",
      codeId: "src\\\\compiler\\\\codegen\\\\index.js",
      isLightUp: 0,
      childNum: 0,
      lightUpNum: 0,
      father: "条件渲染",
      itemStyle: {
        color: normalColor
      },
    }]
  }, {
    name: "事件渲染",
    isLightUp: 0,
    childNum: 1,
    lightUpNum: 0,
    father: "渲染",
    itemStyle: {
      color: normalColor
    },
    children: [{
      name: "codegen/index.js",
      codeId: "src\\\\compiler\\\\codegen\\\\index.js",
      isLightUp: 0,
      childNum: 0,
      lightUpNum: 0,
      father: "事件渲染",
      itemStyle: {
        color: normalColor
      },
    }]
  }]
}
let data4 = {
  name: "事件处理",
  isLightUp: 0,
  childNum: 1,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "instance/events.js",
    codeId: "src\\\\core\\\\instance\\\\events.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "事件处理",
    itemStyle: {
      color: normalColor
    },
  }]
}
let data5 = {
  name: "混合",
  isLightUp: 0,
  childNum: 1,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "util/options.js",
    codeId: "src\\\\core\\\\util\\\\options.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "混合",
    itemStyle: {
      color: normalColor
    },
  }]
}
let data6 = {
  name: "表单输入绑定",
  isLightUp: 0,
  childNum: 1,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "create-component.js",
    codeId: "src\\\\core\\\\vdom\\\\create-component.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "表单输入绑定",
    itemStyle: {
      color: normalColor
    },
  }]
}
let data7 = {
  name: "过滤器",
  isLightUp: 0,
  childNum: 1,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "util/options.js",
    codeId: "csrc\\\\core\\\\util\\\\options.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "过滤器",
    itemStyle: {
      color: normalColor
    },
  }]
}
let data8 = {
  name: "插件",
  isLightUp: 0,
  childNum: 1,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "global-api/use.js",
    codeId: "src\\\\core\\\\global-api\\\\use.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "插件",
    itemStyle: {
      color: normalColor
    },
  }]
}
let data9 = {
  name: "渲染函数",
  isLightUp: 0,
  childNum: 1,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "instance/render.js",
    codeId: "src\\\\core\\\\instance\\\\render.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "渲染函数",
    itemStyle: {
      color: normalColor
    },
  }]
}
let data10 = {
  name: "自定义指令",
  isLightUp: 0,
  childNum: 5,
  lightUpNum: 0,
  father: "Vue",
  itemStyle: {
    color: normalColor
  },
  children: [{
    name: "directives.js",
    codeId: "src\\\\core\\\\vdom\\\\modules\\\\directives.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "自定义指令",
    itemStyle: {
      color: normalColor
    },
  }, {
    name: "helpers.js",
    codeId: "src\\\\compiler\\\\helpers.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "自定义指令",
    itemStyle: {
      color: normalColor
    },
  }, {
    name: "index.js",
    codeId: "src\\\\compiler\\\\parser\\\\index.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "自定义指令",
    itemStyle: {
      color: normalColor
    },
  }, {
    name: "merge-hook.js",
    codeId: "src\\\\core\\\\vdom\\\\helpers\\\\merge-hook.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "自定义指令",
    itemStyle: {
      color: normalColor
    },
  }, {
    name: "render.js",
    codeId: "src\\\\core\\\\instance\\\\render.js",
    isLightUp: 0,
    childNum: 0,
    lightUpNum: 0,
    father: "自定义指令",
    itemStyle: {
      color: normalColor
    },
  }]
}
var skillTree = [data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10]

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
    userName: app.globalData.userName,
    userImage: app.globalData.userImage,
    canIUseGetUserProfile: false,
    hasUserInfo: false
  },
  onLoad() {

    this.lightUp()

    if (wx.getStorageSync('userInfo').length == 0) {
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

    if (wx.getStorageSync('skillTree').length == 0) {
      wx.setStorageSync('skillTree', skillTree)
      
    } else {
      skillTree = wx.getStorageSync('skillTree')
      console.log(skillTree)
    }

  },
  onReady() {},
  onshow() {
    this.lightUp()
  },
  lightUp() {
    var num = 0
    for (let i = 1; i < skillTree.length; i++) {
      var data = skillTree[i]
      if (wx.getStorageSync(data.name) == data.childNum && data.isLightUp == 0) {
        data.itemStyle.color = lightUpColor
        data.isLightUp = 1
        num ++
        for (let j = 0; j < skillTree[0].childNum; j++) {
          if(skillTree[0].children[j].name == data.name){
            console.log(skillTree[0].children[j].name)
            skillTree[0].children[j].itemStyle.color = lightUpColor
          }
        }
      }
      skillTree[i] = data
    }
    if (num >= skillTree.lenth) {
      skillTree[0].itemStyle.color = lightUpColor
    }
    wx.setStorageSync('skillTree', skillTree)
  },
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
        // console.log(_this.data.code)
        var user = JSON.parse(wx.getStorageSync('userInfo'))
        wx.setStorageSync(user.nickName, user.avatarUrl) //保存用户头像
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
  var tree = wx.getStorageSync('skillTree');
  var data0 = tree[0];
  console.log(data0)
  var option = {
    series: [{
      type: 'tree',

      initialTreeDepth: 1,

      name: 'skillTree',

      data: [data0],

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
        },

      }
    }],
    itemStyle: [{
      color: 'yellow'
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
          url: 'childrenTree/childrenTree?name=' + String(name),
        })
      }
    } else if (param.event.target.culling === false) {
      let name = param.data.name;
      let args = param.data; //当前节点及其子节点的值
      let level = param.data.level; //当前节点的层级 eg:"1-1-0",可以通过level判断当前的层级，从而进行不同的操作
      if (name != "Vue") {
        wx.navigateTo({
          url: 'childrenTree/childrenTree?name=' + String(name),
        })
      }
    }
  })
  return chart;
};