<template>
  <div class="page">
    <div class="page__bd">
      <view class="type-container">
        <scroll-view class="type-navbar" scroll-x="true">
					<view class="type-box" v-for="item in tabs" :key="item.id" @click="tabClick(item.id)">
						<view class="type-navbar-item" :class="[ activeCategoryId == item.id ? 'type-item-on' : '']">
							{{item.name}}
						</view>
					</view>
        </scroll-view>
    	</view>
			<div class="page_search">
				<div>
					<image src="/static/img/search.png" mode="aspectFill" class="search-icon" />
				</div>
			</div>
    </div>
		<div class="pag2__cont" v-if="activeCategoryId === 1">
			<home-page :floors="floors" :banners="banners"></home-page>
		</div>
		<div class="pag2__cont" v-else-if="activeCategoryId === 2">
			<brand-page :brands="brands"></brand-page>
		</div>
		<div class="pag2__cont" v-else>
			<category-page :brands="brands"></category-page>
		</div>
  </div>
</template>

<script>
import wx from "wx";
import card from "@/components/card";
import homePage from './home.vue';
import brandPage from './brand.vue';
import categoryPage from './category.vue';
import { item } from "@/api";
export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
			tabs: [
				{
					id: 1,
					name: '首页'
				},
				{
					id: 2,
					name: '排行榜'
				},
				{
					id: 3,
					name: '品牌团'
				},
				{
					id: 4,
					name: '箱包'
				},
				{
					id: 5,
					name: '品牌团'
				},
				{
					id: 6,
					name: '箱包'
				},
				{
					id: 7,
					name: '品牌团'
				}
			],
      activeIndex: 0,
      fontSize: 30,
      floors: [
				{
					'floor_name': 'BURBERRY',
					'floor_name_pic': 'http://img.aqsea.com/agent/Home/TimeSale/Module/Tilte/Pic/20180518141833992-747045377.jpg',
					'floor_pic': 'http://img.aqsea.com/agent/Home/Brand/Module/Pic/20180531180216994-876050791.jpg',
					'floor_url': '/#/brand/1006/items',
					'items': [
						{
							item_id: 1,
							pic_url: 'http://img.aqsea.com/wl/item/20180613155018089-757828208.jpg',
							quantity: 1,
							title: 'Z Zegna 杰尼亚 男士黑色牛皮腰带皮带',
							price: 1216,
							retail_price: 2399,
							total_distribution_commission: 110,
						},
						{
							item_id: 2,
							pic_url: 'http://img.aqsea.com/wl/item/20180613155923988-1881256558.jpg',
							quantity: 1,
							title: 'Z Zegna 杰尼亚 男士黑色牛皮腰带皮带',
							price: 1217,
							retail_price: 2677,
							total_distribution_commission: 100,
						},
						{
							item_id: 3,
							pic_url: 'http://img.aqsea.com/wl/item/20180613155018089-757828208.jpg',
							quantity: 1,
							title: 'Z Zegna 杰尼亚 男士黑色牛皮腰带皮带',
							price: 1217,
							retail_price: 2677,
							total_distribution_commission: 100,
						},
						{
							item_id: 4,
							pic_url: 'http://img.aqsea.com/wl/item/20180613155923988-1881256558.jpg',
							quantity: 1,
							title: 'Z Zegna 杰尼亚 男士黑色牛皮腰带皮带',
							price: 1217,
							retail_price: 2677,
							total_distribution_commission: 100,
						},
						{
							item_id: 5,
							pic_url: 'http://img.aqsea.com/wl/item/20180613155018089-757828208.jpg',
							quantity: 1,
							title: 'Z Zegna 杰尼亚 男士黑色牛皮腰带皮带',
							price: 1217,
							retail_price: 2677,
							total_distribution_commission: 100,
						}
					],
				},
				{
					'floor_name': 'BURBERRY',
					'floor_name_pic': 'http://img.aqsea.com/agent/Home/Banner/Module/Pic/20180615111132512-552170171.jpg',
					'floor_pic': 'http://img.aqsea.com/agent/Home/Brand/Module/Pic/20180615133728581-2024441450.jpg',
					'floor_url': '/#/brand/1006/items',
					'items': [],
				}
			],
      items: [],
      wrapperHeight: 0,
			banners: [
				{
					content:"53",
					pic_url:"http://img.aqsea.com/agent/Home/Banner/Module/Pic/20180531180250950-10167909.jpg",
					sort:1,
					type:"findings-detail"
				},
				{
					content:"54",
					pic_url:"http://img.aqsea.com/agent/Home/Banner/Module/Pic/20180615105646589-1956112595.jpg",
					sort:2,
					type:"findings-detail"
				}
			],
			brands: [
				{
					background_img: 'http://img.aqsea.com/wl/brand/20180601110335754-1848131929.jpg',
					brand_id: 1098,
					cn_name: '莫斯奇诺',
					country: '意大利',
					description: 'moschino（莫斯奇诺）是设计师franco moschino以自己的名字命名的一个意大利品牌，创立于1983年，产品以设计怪异著称，风格高贵迷人、时尚幽默、俏皮为主线，主要产品有高级成衣、牛仔装、晚宴装及服装配饰。',
					distribution_favorite_quantity: 10,
					en_name: 'MOSCHINO',
					is_distribution_favorite: false,
					logo: 'http://img.aqsea.com/wl/brand_logo/20180601110333117-1917735455.jpg',
					properties: '1000:10830'
				},
				{
					background_img: 'http://img.aqsea.com/wl/brand/20171122173858500-1612776256.jpg',
					brand_id: 1099,
					cn_name: '葆蝶家',
					country: '意大利',
					description: '低调、质量及工艺 – Bottega Veneta自1966年始，汇集意大利出色传统皮革工匠，创立于1983年，产品以设计怪异著称，风格高贵迷人、时尚幽默、俏皮为主线，主要产品有高级成衣、牛仔装、晚宴装及服装配饰。',
					distribution_favorite_quantity: 10,
					en_name: 'Bottega Veneta',
					is_distribution_favorite: false,
					logo: 'http://img.aqsea.com/wl/brand_logo/20171121173259229-1432486973.png',
					properties: '1000:10830'
				},
				{
					background_img: 'http://img.aqsea.com/wl/brand/20170711171117260-1573021676.jpg',
					brand_id: 1100,
					cn_name: '阿迪达斯',
					country: '美国',
					description: 'moschino（莫斯奇诺）是设计师franco moschino以自己的名字命名的一个意大利品牌，创立于1983年，产品以设计怪异著称，风格高贵迷人、时尚幽默、俏皮为主线，主要产品有高级成衣、牛仔装、晚宴装及服装配饰。',
					distribution_favorite_quantity: 10,
					en_name: 'adidas',
					is_distribution_favorite: false,
					logo: 'http://img.aqsea.com/wl/brand_logo/20170711171129682-1006803795.jpg',
					properties: '1000:10174'
				}
			],
			activeCategoryId: 1,
			swiperCurrent: 1, 
			autoplay: true,
			interval: 3000,
			duration: 1000
    };
  },

  components: {
		card,
		homePage,
		brandPage,
		categoryPage
  },

  mounted() {
    this.fetchRouteData();
  },

  methods: {
    // 去登录
    goLogin() {
      wx.navigateTo({
        url: "../login/main"
      });
    },
    async fetchRouteData() {
      console.log(1);
      const data = await item.page.agent.index.get();
      this.floors = data.floors;
      this.floors.forEach(a => {
        if (a.items.length === 0) return;
        a.items = a.items.slice(0, 5);
      });
      this.banners = data.slides;
    },
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    tabClick(id) {
			console.log(this.activeCategoryId, id)
      this.activeCategoryId = id;
    }
  },
  computed: {
  },
  onShareAppMessage(res) {
    return {
      title: "我获得",
      path: "/pages/index/main",
      imageUrl: "https://wechat.dddog.com.cn/static/wescale.jpg"
    };
  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style lang="scss">
.page__bd {
	display: flex;
	width: 100%;
	border-bottom: 1px solid #ccc;
}
.page_search {
	width: 120rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		display: flex;
		// margin: 24rpx 0 16rpx;
		width: 100%;
		// height: 40rpx;
		line-height: 40rpx;
		box-sizing: border-box;
		justify-content: center;
		align-items: center;
		border-left: 1px solid #ccc;
		.search-icon {
			width: 44rpx;
  		height: 44rpx;
		}
	}
}
.type-container{
  flex-grow: 1;
  height: 80rpx;
  background-color: #fff;
	overflow: hidden;
	margin: 0 10rpx;
}
.type-navbar{
  white-space: nowrap;
  height: 80rpx;
  width: 100%;
  background-color: #fff;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.type-box{
  padding: 0 30rpx;
  box-sizing: content-box;
  font-size: 24rpx;
  line-height: 76rpx;
  text-align: center;
  display: inline-block;
  overflow: hidden;
}
.type-navbar-item{
  border-bottom: 4rpx solid #fff;
}
.type-item-on{
  border-bottom: 4rpx solid #e64340;
}

.container {
  background-color: #F2f2f2;
  min-height: 100%;
}
.swiper-container{
  width: 750rpx;
  position: relative;  
}
.swiper_box {
  width: 100%;
  height: 407rpx;
}

swiper-item image {
  width: 100%;
  display: inline-block;
  overflow: hidden;
  height: 407rpx;
}

.floor__title__image {
	width: 100%;
	height: 121rpx;
}
.floor-banner_image {
	width: 100%;
	// height: 302rpx;
}
.aqsea {
	&-floor__title {
    height: 121rpx;
    height: auto;
    position: relative;
    background: #fff;
    img {
      width: 100%;
    }

    .line-through {
      display: inline-block;
      width: 80px;
      border-bottom: 2px solid #ddd;
      height: 30px;
      vertical-align: super;
    }

    .text {
      display: inline-block;
      background: #fff;
      text-align: center;
      height: 78px;
      line-height: 78px;
      font-size: 30rpx;
      color: #000;
      padding: 0 20px;
    }
	}

  &-advertisement {
    width: 726px;
    height: 400px;
    border-radius: 10px;
    /*no*/
    margin-bottom: 22px;
    overflow: hidden;
  }

  &-floor {
		padding: 10rpx;
    background: #f2f2f2;
  }

  &-floor-banner {
    display: block;
    width: 100%;
		// height: 302rpx;
		height: auto;
    margin: 0 auto;
  }
}
</style>

