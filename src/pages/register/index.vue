<template>
  <div class="aqsea-register" ref="wapper">
    <div class="aqsea-register-box">
      <div class="aqsea-register-input__box">
        <input type="text" placeholder="请输入手机号" class="aqsea-register-input" v-model="form.mobile" />
      </div>
      <div class="aqsea-register-input__box">
        <input type="text" class="aqsea-register-input" placeholder="请输入短信验证码" v-model="form.verify_code" />
        <!-- <c-sms-verification-code class="btn-get-verification-code" :mobile="form.mobile" code="register"></c-sms-verification-code> -->
      </div>
      <div class="aqsea-register-input__box">
        <input type="text" placeholder="邀请码" v-model="form.invite_code" class="aqsea-register-input" />
        <p class="aqsea-register-link-tips">
          <i v-if="!form.invite_code" @click="showSlide()">没有邀请码，
            <span>如何注册></span>
          </i>
          <button v-else class="btn-verification" @click="showSlide(1)">查看邀请人</button>
        </p>
      </div>
      <button class="aqsea-register-btn" @click="submit" :class="{'actived': form.mobile&&form.verify_code&&form.invite_code}">注册</button>
      <div class="aqsea-register-tips">
				<p class="text register-agreement">
					<span class="tips-text">注册代表同意</span>《奢团平台协议》
				</p>
        <p class="go-login" @click="goLogin()">
          去登录
        </p>
      </div>
    </div>

    <p class="aqsea-register-help">客服热线：0571-899657</p>
  </div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				mobile: '',
				verify_code: '',
				password: '',
				open_id: '',
				palteform: '0',
				user_type: '2',
				invite_code: ''
			},
			popupVisible: false,
			mentorList: [],
			show: false,
			is_disabled: false,
			isPassword: true,
			leader: [],
			wrapperHeight: 0
		}
	},
	methods: {
		goLogin() {
			wx.navigateTo({
        url: '../login/main'
      })
		}
	}
};
</script>

<style lang="scss">
.aqsea-register {
  background: #fff;
  &-box {
    margin: 30rpx 70rpx;
  }

  &-input__box {
    position: relative;
    padding-bottom: 1rpx;
    overflow: hidden;
    .icon {
      font-size: 30rpx;
    }
    .icon-box {
      position: absolute;
      top: 37rpx;
      right: 0;
    }

    .close {
      right: 108rpx;
      fill: #ccc;
      color: #fff;
    }

    .eyes-open {
      right: 42rpx;
      fill: #b2b2b2;
    }
  }

  &-input {
    width: 100%;
    height: 99rpx;
    color: #000; 
    font-size: 30rpx;
    border: 0;
    border-bottom: 1rpx solid #ccc;
    /*no*/
  }

  &-btn {
    display: block;
    margin: 0 auto;
    width: 610rpx;
    height: 80rpx;
    color: #fff;
    background: #c2c2c2;
    font-size: 32rpx;
    text-align: center;
    border-radius: 5rpx;
    /*no*/
    margin-top: 60rpx;
  }

  .actived {
    background: #000;
  }

  &-tips {
    display: flex;
    margin-top: 60rpx;
    font-size: 26rpx;
    color: #666;
    justify-content: space-between;
    .go-login {
      color: #9d1f14;
      display: flex;
      text-decoration: underline;
      justify-content: center;
      align-items: center;
    }
    .text {
      // flex: 1;
    }

    .register {
      text-align: right;
    }

    .tips-text {
      color: #999;
      padding-right: 8rpx;
    }
  }

  .btn-get-verification-code {
    position: absolute;
    right: 30rpx;
    top: 27rpx;
    width: 164rpx;
    height: 52rpx;
    border: 1rpx solid #999;
    font-size: 24rpx;
    color: #999;
    background: #fff;
    border-radius: 5rpx;
    /*no*/
  }
  .btn-verification {
    position: absolute;
    right: 30rpx;
    top: -42rpx;
    width: 164rpx;
    height: 52rpx;
    border: 1rpx solid red;
    font-size: 24rpx;
    color: red;
    background: #fff;
    border-radius: 5rpx;
    /*no*/
  }
  .register-agreement {
    text-align: center;
    color: #9d1f14;
  }

  &-link-tips {
    position: absolute;
    font-size: 24rpx;
    color: #252525;
    right: 0;
    bottom: 35rpx;
    span {
      color: #9d1f14;
    }
  }

  &-help {
    font-size: 24rpx;
    color: #444;
    // position: absolute;
    // bottom: 96rpx;
    // left: 50%;
    // margin-left: -115rpx;
    text-align: center;
    margin-top: 300rpx;
  }

  &-slide {
    width: 685rpx;
    height: 100%;
  }

  &-slide__box {
    padding: 50rpx;
    .slide-title {
      font-size: 32rpx;
      color: #000;
      text-align: center;
    }
    .slide-tips {
      font-size: 26rpx;
      color: #5f5f5f;
      line-height: 40rpx;
      text-align: center;
      margin-top: 40rpx;
    }
    .slide-list {
      margin-top: 55rpx;
    }
    .slide-item {
      display: flex;
      border-bottom: 1rpx solid #333;
      padding: 36rpx 0;

      .check-box {
        line-height: 90rpx;
        font-size: 34rpx;
      }
    }
    .slide-header {
      width: 88rpx;
      height: 88rpx;
      border-radius: 50%;
      background: #000;
      // margin: 20rpx 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .slide-text {
      flex: 1;
      padding: 10rpx 35rpx;
      .name {
        font-size: 23rpx;
        color: #000;
        font-weight: 600;
        line-height: 35rpx;
      }
      .introduce {
        font-size: 21rpx;
        color: #444;
        line-height: 35rpx;
      }
    }
    .slide-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 40rpx 50rpx;
      -moz-box-shadow: 0rpx 150rpx 445rpx 0rpx #000;
      box-shadow: 0rpx 150rpx 445rpx 0rpx #000;
    }
    .slide-ok {
      width: 584rpx;
      height: 80rpx;
      line-height: 80rpx;
      background: #c2c2c2;
      border-radius: 5rpx;
      font-size: 32rpx;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
