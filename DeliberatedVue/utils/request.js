// const baseUrl = "https://geniusmarket.top:9500/"
// const baseUrl = "http://localhost:8081/"
const baseUrl = "http://121.41.25.13:9500/"

function baseRequest(url, method, data, loading, header) {
  return new Promise((resolve, reject) => {
    let _loading
    if(loading == undefined) _loading = false
    else _loading = loading
    if(_loading) {
      wx.showLoading({
        title: '加载中...'
      })
    }
    wx.request({
      url: baseUrl + url,
      method: method || "GET",
      data: data || {},
      header: header || {
        'content-type': 'application/json'
      },
      success: res => {
        resolve(res.data)
        wx.hideLoading()
      },
      fail: err => {
        wx.hideLoading()
        reject(err)
      }
    })
  })
}

let request = {}
const methodArr = ['OPTIONS', 'GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'TRACE', 'CONNECT']

for (let method in methodArr) {
  request = (url, method, data, loading, header) => baseRequest(url, method, data, loading, header)
}

export default request