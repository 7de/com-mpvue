// import wx from 'wx';//引用微信小程序wx对象
export default {
  data () {
    return {
      apiData: {
        // 正式
        // host: 'https://www.comtti.net/',
        // 测试
        host: 'https://actor.comtti.net/pc/',
        token: wx.getStorageSync('token_n')
      }
    }
  },
  _request (method, url, params, header = {}) {
    // console.log(_token)
    const { host, token } = this.apiData
    let subToken = ''
    // let subToken = token ? token : wx.getStorageSync('token_n')
    if (!token) {
      subToken = wx.getStorageSync('token_n')
    } else {
      subToken = token
    }
    return new Promise((resolve, reject) => {
      let userToken = subToken
      if (!userToken) {
        wx.hideLoading()
        wx.showModal({
          title: '温馨提示',
          content: '您暂未授权或授权已过期',
          showCancel: false,
          confirmText: '去授权',
          success: (res) => {
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/authorize'
              })
            }
          }
        })
      } else {
        wx.request({
          url: `${host}${url}`,
          method: method,
          data: params,
          header: Object.assign({
            'Authorization': 'Bearer ' + userToken,
            'content-type': 'application/json'
          }, header),
          success: res => {
            const {
              data
            } = res
            if (data.code === 500 || data.status === 500) {
              wx.showToast({
                title: '服务器错误，请联系管理员',
                icon: 'none',
                duration: 2000
              })
              // resolve(this._request(method, url, params))
            } else if (data.code === -1) {
              reject(data)
            } else if (data.code === -100) {
              wx.navigateTo({
                url: '/pages/authorize'
              })
            } else {
              resolve(data)
            }
          },
          fail: err => {
            wx.hideLoading()
            if (err.errMsg === 'request:fail timeout') {
              wx.showModal({
                title: '错误提示',
                content: '请求超时，请稍后重试',
                confirmText: '我知道了',
                success: (res) => {
                  if (res.confirm) {
                  }
                }
              })
            } else {
              reject(err)
              console.log('请求失败')
            }
          }
        })
      }
    })
  },
  get (url, params = {}, header = {}) {
    return this._request('GET', url, params, header)
  },
  post (url, params = {}, header = {}) {
    return this._request('POST', url, params, header)
  },
  put (url, params = {}, header = {}) {
    return this._request('PUT', url, params, header)
  },
  delete (url, params = {}, header = {}) {
    return this._request('DELETE', url, params, header)
  }
}
