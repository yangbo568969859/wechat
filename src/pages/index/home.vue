<template>
	<div>
		<view class="swiper-container">
			<swiper class="swiper_box" :autoplay="true" :interval="3000" :duration="1000" :indicator-dots="true" :circular="true" indicator-color="#d21034" indicator-active-color="#fff" bindchange="swiperchange">
				<block v-for="item in banners" :key="item.id">
					<swiper-item>
						<image bindtap="tapBanner" mode="aspectFill" :data-id="item.content" :src="item.pic_url" class="slide-image" style="width: 100%; height: 100%; background-color: rgba(0, 0,0, 0.4);"/>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="aqsea-floor" v-for="floor in floors" :key="floor.pic">
			<div class="aqsea-floor__title" v-if="floor.floor_name_pic">
				<image class="floor__title__image" :src="floor.floor_name_pic" mode="widthFix"/>
			</div>
			<a :href="floor.floor_url" target="_self" class="aqsea-floor-banner" v-if="floor.floor_pic">
				<image :src="floor.floor_pic" class="floor-banner_image" mode="widthFix" />
			</a>
			<home-index :items="floor.items"></home-index>
			<!-- <view class="coupons">
				<scroll-view class="coupons-scroll" scroll-x="true">
					<view class="coupons-item">
						<view>
							<div class="aqsea-item-img">
								<image :src="item.pic_url" class="aqsea-item-sold-out" mode="widthFix" />
							</div>
							<p class="aqsea-item-num">仅剩{{item.quantity}}件</p>
							<p class="aqsea-item-title">{{item.title}}</p>
							<p class="aqsea-item-discount">1折&nbsp;|&nbsp;约赚{{item.total_distribution_commission}}</p>     
							<p class="aqsea-item-money">￥{{item.price}}
								<span class="aqsea-item-earn__money">￥{{item.retail_price}}</span>
							</p>
						</view>
					</view>
				</scroll-view>
			</view> -->
		</view>
	</div>
</template>

<script>
	import homeIndex from './home/index'
	export default {
		props: ['floors', 'banners'],
		components: {
			homeIndex
		}
	}
</script>

<style lang="scss">

</style>
