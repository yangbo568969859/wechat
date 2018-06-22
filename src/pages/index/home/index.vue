<template>
  <div>
		<view class="coupons">
			<scroll-view class="coupons-scroll" scroll-x="true">
				<view v-for="item in items" :key="item.item_id" class="coupons-scroll-box">
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
			</scroll-view>
		</view>
	</div>
</template>

<script>
	export default {
		props: ['items']
	}
</script>

<style lang="scss">
.coupons-scroll {
	white-space: nowrap;
	overflow: hidden;
  width: 100%;
  background-color: #fff;
}
.coupons-scroll-box {
	box-sizing: content-box;
  font-size: 24rpx;
  text-align: center;
  display: inline-block;
	overflow: hidden;
	margin: 10rpx;
}
.aqsea-item-sold-out {
	width: 220rpx;
  height: 220rpx;
}
.aqsea {
	&-item-img {
    position: relative;
    width: 220rpx;
    height: 220rpx;
  }

  &-item-num {
    background: #fbf0ee;
    font-size: 22rpx;
    color: #666;
    padding: 5rpx;
    margin-bottom: 5rpx;
    text-align: center;
  }
  &-item-discount {
    border: 1px solid #ed848c;
    color: #e1323f;
    font-size: 22rpx;
    padding: 5rpx 10rpx;
    width: 160rpx;
    border-radius: 5rpx;
    line-height: 23rpx;
    text-align: center;
    margin: 0 auto;
  }
  &-item-title {
    width: 220rpx;
    font-size: 24rpx;
    color: #000;
    text-align: center;
    line-height: 52rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-item-money {
    width: 220rpx;
    overflow: hidden;
    font-size: 26rpx;
    color: #000;
    line-height: 28rpx;
    margin-top: 16rpx;
    font-weight: 700;
    text-align: center;
  }

  &-item-earn {
  }

  &-item-earn__money {
    font-size: 20rpx;
    color: #939393;
    font-weight: normal;
    text-decoration: line-through;
  }
}
</style>
