import Vue from 'vue'
import App from './App'
import store from './store'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(MpvueRouterPatch)

// 引入weui样式
import "../static/css/weui.wxss";

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/mine/main', 'pages/shop/main','^pages/index/main'],
    window: {
      backgroundTextStyle: 'dark',
      backgroundColor: '#d22222',
      backgroundColorTop: '#ffffff',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '奢团达人',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#ff6700',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/index/main',
        text: '选品',
        iconPath: 'static/img/home.png',
        selectedIconPath: 'static/img/home_active.png'
      }, {
        pagePath: 'pages/logs/main',
        text: '发现',
        iconPath: 'static/img/discovery.png',
        selectedIconPath: 'static/img/discovery_active.png'
      }, {
        pagePath: 'pages/shop/main',
        text: '店铺',
        iconPath: 'static/img/mine.png',
        selectedIconPath: 'static/img/mine_active.png'
      }, {
        pagePath: 'pages/mine/main',
        text: '我的',
        iconPath: 'static/img/mine.png',
        selectedIconPath: 'static/img/mine_active.png'
      }]
    }
  }
}
