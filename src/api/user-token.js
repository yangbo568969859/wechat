// import connect from './connect'
import { getStorage, setStorage, removeStorage } from '@/utils/wechat'
const tokenKey = 'token'
const userKey = 'user'

export default {
  async getToken() {
    let data = getStorage(tokenKey)
    if (!data) return null

    data = JSON.parse(data)

    if (new Date(data.expiresTime) > new Date()) return data
    return null

    // const res = await connect.refreshtoken.get(
    //   {
    //     refresh_token: data.refresh_token
    //   },
    //   { headers: { Authorization: `${data.token_type} ${data.access_token}` } }
    // )

    // if (!res.is_success) {
    //   return null
    // }

    // return this.setToken(res.token)
  },
  setToken(data) {
    data.expiresTime = Date.now() + data.expires_in * 1000
    setStorage(tokenKey, JSON.stringify(data))
    return data
  },
  async isAuth() {
    let token = await this.getToken()
    return token && !token.anonymous
  },
  clearToken() {
    removeStorage(tokenKey)
  },
  getUser() {
    const data = getStorage(userKey)
    if (data) {
      return JSON.parse(data)
    }

    return null
  },
  setUser(data) {
    setStorage(userKey, JSON.stringify(data))
  }
}
