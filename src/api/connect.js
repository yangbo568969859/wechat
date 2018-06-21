import request from './fetch-api'

const dataConf = {
  client_id: 'b2b_app',
  client_secret: 'sh&%gsrFh12Bs&'
}

const conf = {
  notToken: true
}

export default {
  weixin: {
    url: {
      get: async params => {
        return await request.get('connect.weixin.url.get', {
          params
        })
      }
    },
    login: async data => {
      Object.assign(data, dataConf, {
        grant_type: 'password',
        scope:
          'account category_brand distribution discovery item logistics user trade_refund fund offline_access openid profile account_b2b user_b2b'
      })
      return await request.post('connect.weixin.login', data, conf)
    },
    jsticket: {
      get: async params => {
        return await request.get('connect.weixin.jsticket.get', { params })
      }
    }
  },
  refreshtoken: {
    get: async (data, config) => {
      Object.assign(data, dataConf, {
        grant_type: 'refresh_token'
      })
      return await request.post(
        'connect.refreshtoken.get',
        data,
        Object.assign(config, conf)
      )
    }
  },
  token: {
    get: async data => {
      Object.assign(data, dataConf, {
        grant_type: 'password',
        scope:
          'category_brand distribution discovery item logistics user trade_refund fund offline_access openid profile account_b2b user_b2b'
      })

      return await request.post('authorize.token.get', data, conf)
    }
  }
}
