// pages/test/test.js
import {
  test
} from "../../api/test"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  test() {
    let data = {
      "data": {
        "status": "success",
        "data": {
          "openId": "sdsadsadsdA",
          "userInfo": "sdadsadasdsa"
        }
      }
    }
    test("POST", data, true).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
})