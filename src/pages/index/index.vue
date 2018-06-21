<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
          <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">
            <button class="weui-btn weui-btn_primary" @click="goLogin()">去登录</button>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">选项二的内容</div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">选项三的内容</div>
          <div class="weui-tab__content" :hidden="activeIndex != 3">选项3的内容</div>
          <div class="weui-tab__content" :hidden="activeIndex != 4">选项4的内容</div>
          <div class="weui-tab__content" :hidden="activeIndex != 5">选项5的内容</div>
          <div class="weui-tab__content" :hidden="activeIndex != 6">选项6的内容</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wx from 'wx'
import card from '@/components/card'
import { item } from '@/api'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      tabs: ["首页", "排行榜", "品牌团", "箱包", "鞋靴", "配饰", "服饰"],
      activeIndex: 0,
      fontSize: 30,
      floors: [],
      items: [],
      wrapperHeight: 0,
      banners: []
    }
  },

  components: {
    card
  },

  mounted () {
    this.fetchRouteData()
  },

  methods: {
    // 去登录
    goLogin() {
      wx.navigateTo({
        url: '../login/main'
      })
    },
    async fetchRouteData() {
      console.log(1)
      const data = await item.page.agent.index.get()
      this.floors = data.floors
      this.floors.forEach(a => {
        if (a.items.length === 0) return
        a.items = a.items.slice(0, 5)
      })
      this.banners = data.slides
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    tabClick(e) {
      console.log(e);
      this.activeIndex = e.currentTarget.id;
    }
  },
  computed: {
    navbarSliderClass() {
      if (this.activeIndex == 0) {
        return 'weui-navbar__slider_0'
      }
      if (this.activeIndex == 1) {
        return 'weui-navbar__slider_1'
      }
      if (this.activeIndex == 2) {
        return 'weui-navbar__slider_2'
      }
      if (this.activeIndex == 3) {
        return 'weui-navbar__slider_3'
      }
      if (this.activeIndex == 4) {
        return 'weui-navbar__slider_4'
      }
      if (this.activeIndex == 5) {
        return 'weui-navbar__slider_5'
      }
      if (this.activeIndex == 6) {
        return 'weui-navbar__slider_6'
      }
    }
  },
  onShareAppMessage (res) {
    return {
      title: '我获得',
      path: '/pages/index/main',
      imageUrl: 'https://wechat.dddog.com.cn/static/wescale.jpg'
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style>
/* .userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
} */
</style>
<style>
page,
.page,
.page__bd {
  height: 100%;
}
.page__bd {
  padding-bottom: 0;
}
.weui-tab__content {
  padding-top: 60px;
  text-align: center;
}
.weui-navbar__slider_0 {
  left: 29rpx;
  transform: translateX(0);
}
.weui-navbar__slider_1 {
  left: 29rpx;
  transform: translateX(70rpx);
}
.weui-navbar__slider_2 {
  left:29rpx;
  transform: translateX(140rpx);
}
.weui-navbar__slider_3 {
  left:29rpx;
  transform: translateX(210rpx);
}
.weui-navbar__slider_4 {
  left:29rpx;
  transform: translateX(280rpx);
}
.weui-navbar__slider_5 {
  left:29rpx;
  transform: translateX(350rpx);
}
.weui-navbar__slider_6.userinfo-avatar {
  left:29rpx;
  transform: translateX(420rpx);
}
</style>

