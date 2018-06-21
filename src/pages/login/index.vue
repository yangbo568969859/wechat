<template>
  <div class="aqsea-login">
		<image class="login-image" mode="aspectFill" style="width: 100%; height: 100%; background-color: rgba(0, 0,0, 0.4);" src="../../../static/img/bg.png"></image>
    <div class="login-tab">
      <p class="login-tab-title left" :class="{'border':isShow}" @click="tabClick(1)">短信登录</p>
      <p class="login-tab-title" :class="{'border':!isShow}" @click="tabClick(2)">密码登录</p>
    </div>
    <div class="aqsea-login-box" v-show="isShow">
			<div class="aqsea-login-input__box">
        <input type="number" placeholder="手机号" class="aqsea-login-input" v-model="form.user_name" />
      </div>
      <div class="aqsea-login-input__box">
        <input type="text" class="aqsea-login-input" placeholder="短信验证码" v-model="form.verify_code" />
        <SMSVerificationCode :mobile="form.mobile" :code="register"></SMSVerificationCode>
      </div>
      <button class="aqsea-login-btn" @click="login()">登录</button>
      <div class="aqsea-login-tips">
        <navigator class="text" hover-class="none">忘记密码？</navigator>
        <navigator class="text register" hover-class="none" url="../register/main">注册账号</navigator>
      </div>
    </div>
    <div class="aqsea-login-box" v-show="!isShow">
			<div class="aqsea-login-input__box">
        <input type="number" placeholder="手机号" class="aqsea-login-input" v-model="form.user_name" />
      </div>
      <div class="aqsea-login-input__box">
        <input type="password" placeholder="密码" class="aqsea-login-input" v-model="form.password" />
      </div>
      <button class="aqsea-login-btn" @click="login()">登录</button>
      <div class="aqsea-login-tips">
        <navigator class="text" hover-class="none">忘记密码？</navigator>
        <navigator class="text register" hover-class="none" url="../register/main">注册账号</navigator>
      </div>
    </div>
  </div>
</template>

<script>
import SMSVerificationCode from 'components/sms-verification-code'
export default {
  name: 'c-login',
  data() {
    return {
      form: {
        user_name: '',
        password: '',
        verify_code: '',
        mobile: ''
      },
      isShow: true
    }
  },
  methods: {
    async login() {
    },
    tabClick(index) {
      this.index = index
      if (this.index === 1) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  },
  components: {
    'SMSVerificationCode': SMSVerificationCode
  }
}
</script>

<style lang="scss">

.aqsea-login {
	color: #fff;
	position: relative;
	height: 100vh;
	overflow: hidden;
	.login-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		z-index: -1;
	}
  &-box {
    margin: 35px 35px;
  }
  .btn-get-verification-code {
    position: absolute;
    right: 15px;
    top: 14px;
    width: 82px;
    height: 26px;
    line-height: 23px;
    border: 1px solid #fff;
    font-size: 12px;
    /*no*/
    background: none;
    color: #fff;
  }
  &-input__box {
    position: relative;
    ::-webkit-input-placeholder { /* WebKit browsers */
    color:    #fff;
		}
		:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
				color:    #fff;
		}
		::-moz-placeholder { /* Mozilla Firefox 19+ */
				color:    #fff;
		}
		:-ms-input-placeholder { /* Internet Explorer 10+ */
				color:    #fff;
		}

    .icon {
      font-size: 12px;
      position: absolute;
      top: 19px;
    }
    .close {
      right: 54px;
      fill: #ccc;
      color: #fff;
    }

    .eyes-open {
      right: 21px;
      fill: #fff;
    }
  }

  &-input {
    width: 100%;
    height: 50px;
    font-size: 12px;
    border-bottom: 1px solid #fff;
    /*no*/
    background: none;
  }

  &-btn {
    display: block;
    margin: 0 auto;
    width: 305px;
    height: 40px;
    line-height: 40px;
    color: #000;
    background: #7b7877;
    font-size: 13px;
    text-align: center;
    /*no*/
    margin-top: 30px;
  }

  .actived {
    background: #000;
  }

  &-tips {
    display: flex;
    margin-top: 30px;
    font-size: 12px;

    .text {
      flex: 1;
    }

    .register {
      text-align: right;
    }
  }
  &-waring {
    font-size: 12px;
    margin-top: 10px;
    padding-bottom: 8px;
  }
  &-third {
    width: 124px;
    margin: 0 auto;
  }
  .login-wechat {
    margin-right: 44px;
  }
  .icons {
    font-size: 38px;
    fill: #fff;
  }
}

.login-tab {
	display: flex;
	justify-content: space-around;
  width: 179px;
  margin: 0 auto;
  padding-top: 170px;
  height: 19px;
  line-height: 19px;
  &-title {
    font-size: 12px;
    text-align: center;
  }
  &-title.border {
    border-bottom: 1px solid #fff;
  }
}
.aqsea-login-input::-webkit-input-placeholder { /* WebKit browsers */
    color:    #fff;
		}
</style>


