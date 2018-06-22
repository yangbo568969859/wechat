<template>
<div class="brand">
	<div class="brand-detail" v-for="item in brands" :key="item.brand_id">
    <div class="brand-detail__bg" @click="toBrandItems(item.brand_id)">
      <img class="brand-bg-img" :src="item.background_img" width="100%" height="100%"/>
    </div>
    <div class="brand-info">
      <div class="brand-info__top">
        <div class="brand-info__logo">
          <img class="brand-logo-img" :src="item.logo" width="100%" height="100%" />
        </div>
        <div class="brand-info__text">
          <p class="brand-info-title__text">
            {{item.en_name}} {{item.cn_name}}
          </p>
          <p class="brand-info__count">在售人数
            <span class="count">{{item.distribution_favorite_quantity}}</span>
          </p>
        </div>
        <div class="brand-info__handle">
          <c-putaway v-if="item.brand_id" :id="item.brand_id" type="brand" v-model="item.is_distribution_favorite" @soldout="onSoldout" @soldin="onSoldin" class="icon"></c-putaway>
          <icon symbol="share" class="share icon" @click.native="onShare(item.brand_id)"></icon>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
	export default {
		props: ['brands']
	}
</script>

<style lang="scss">
.brand {
	background: #f2f2f2;
}
.brand-detail {
  margin-bottom:12rpx;

  &__bg {
    position: relative;
    width: 100%;
    height: 300rpx;
  }

  .brand-info {
    position: relative;
    padding: 0 30rpx;
    height: 130rpx;
    background: #fff;

    &__top {
      display: flex;
      align-items: center;
    }

    &__logo {
      width: 120rpx;
      height: 120rpx;
      border: 1rpx solid #ddd;
      /*no*/
      margin-top: -30rpx;
    }

    &__text {
      flex: 2;
      margin-left: 20rpx;
      margin-top: -10rpx;
    }

    &-title__text {
      font-size: 28rpx;
      /**/
      color: #000;
      font-weight: 700;
      padding: 16rpx 0 12rpx 0;
      width: 350rpx;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &__handle {

      padding-top: 25rpx;

      .icon {
        font-size: 32rpx;
        fill: #666;
        padding-right: 50rpx;
      }

      .share {
        padding-right: 20rpx;
      }
    }

    &__count {
      font-size: 22rpx;
      /**/
      color: #999;

      .count {
        font-style: none;
        color: red;
        ;
      }
    }
  }
}
.brand-logo-img {
	width: 60px;
	height: 60px;
}
.brand-bg-img {
	width: 100%;
  height: 150px;
}
</style>

