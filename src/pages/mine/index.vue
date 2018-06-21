<template>
  <view class="weui-cells">
    <view class="weui-cell">
        <view class="weui-cell__bd">
            <view class="title">{{goods.header}}</view>
            <view class="desp">{{goods.description}}</view>
            <view class="meta">{{goods.meta}}</view>
        </view>
    </view>
</view>
</template>

<script>
import { formatTime } from "@/utils/index";

export default {
  data() {
    return {
      goods:{
				header: '小米',
				description: '小米小米小米小米小米',
				meta: '小米12332',
			}
    };
  },

  created() {
    const logs = wx.getStorageSync("logs") || [];
    this.logs = logs.map(log => formatTime(new Date(log)));
  }
};
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
