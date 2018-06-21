<template>
  <button @click="onClick" class="btn-get-verification-code">
    {{text}}
  </button>
</template>

<script>
import { user } from '@/api'

export default {
  name: 'c-sms-verification-code',
  props: {
    mobile: { type: String, required: true },
    code: { type: String, required: true }
  },
  data() {
    return {
      id: null,
      second: 0
    }
  },
  computed: {
    text() {
      if (this.second === 0) {
        return '获取验证码'
      }

      return `${this.second}秒后重发`
    }
  },
  methods: {
    async onClick() {
      if (this.second > 0 || this.mobiel === '') return
      const res = await user.page.sms.send({ code: this.code, mobile: this.mobile })

      if (!res.is_success) {
        this.$toast(res.msg)
        return
      }

      this.$toast('验证码发送成功')

      this.second = 60
      this.start()
    },
    start() {
      if (this.id !== null || this.second === 0) return

      this.id = setInterval(() => {
        if (this.second === 0) {
          clearInterval(this.id)
          this.id = null
          return
        }
        this.second -= 1
      }, 1000)
    }
  }
}
</script>

