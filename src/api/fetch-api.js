import wx from 'wx'
import fly from 'flyio'

const request = new fly()

request.config.timeout = 10 * 1000
request.config.headers = {
  'Content-Type': 'application/json;charset=UTF-8'
}
request.interceptors.request.use(config => {
	config.url = `/router/rest?method=aqsea.${config.url}&version=v1`
	if (
    process.env.DEPLOY_ENV === 'dev-production' ||
    process.env.DEPLOY_ENV === 'production'
  ) {
    config.url = `http://api.aqsea.com${config.url}`
  } else if (
    process.env.DEPLOY_ENV === 'dev-staging' ||
    process.env.DEPLOY_ENV === 'staging'
  ) {
    config.url = `http://10.9.2.247:8080${config.url}`
  } else {
    config.url = `/mock${config.url}`
  }
  wx.showLoading({ title: '拼命加载中...' })
  return config
})
request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    return promise.resolve(response.data.data)
  },
  (err, promise) => {
    wx.hideLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default request

// import wx from 'wx'
// import Fly from 'flyio'

// const request = new Fly()

// request.interceptors.request.use((request) => {
//   wx.showNavigationBarLoading()
//   return request
// })

// request.interceptors.response.use(
//   (response, promise) => {
//     wx.hideNavigationBarLoading()
//     return promise.resolve(response.data)
//   },
//   (err, promise) => {
//     wx.hideNavigationBarLoading()
//     wx.showToast({
//       title: err.message,
//       icon: 'none'
//     })
//     return promise.resolve()
//   }
// )

// export default request