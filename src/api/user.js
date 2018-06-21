import request from './fetch-api'

export default {
  page: {
    address: {
      list: {
        get: async params => {
          return await request.get('user.page.address.list.get', params)
        }
      },
      add: async data => {
        return await request.post('user.page.address.add', data)
      },
      get: async params => {
        return await request.get('user.page.address.get', params)
      },
      update: async data => {
        return await request.put('user.page.address.update', data)
      },
      delete: async params => {
        return await request.delete('user.page.address.delete', params)
      },
      default: {
        get: async params => {
          return await request.get('user.page.address.default.get', params)
        }
      },
      bind: async data => {
        return await request.put('user.page.address.bind', data)
      },
      def: async data => {
        return await request.put('user.page.address.def', data)
      }
    },
    favorite: {
      brand: {
        collect: {
          list: {
            get: async params => {
              return await request.get(
                'user.page.favorite.brand.collect.list.get',
                params
              )
            }
          }
        }
      },
      item: {
        collect: {
          list: {
            get: async params => {
              return await request.get(
                'user.page.favorite.item.collect.list.get',
                params
              )
            }
          }
        }
      },
      collect: {
        delete: async params => {
          return await request.delete(
            'user.page.favorite.collect.delete',
            params
          )
        },
        batch: {
          delete: async params => {
            return await request.delete(
              'user.page.favorite.collect.batch.delete',
              params
            )
          }
        },
        add: async params => {
          return await request.delete('user.page.favorite.collect.add', params)
        }
      }
    },
    statistics: {
      get: async params => {
        return await request.get('user.page.statistics.get', params)
      }
    },
    bank: {
      card: {
        bind: async data => {
          return await request.put('user.page.bank.card.bind', data)
        },
        unbind: async params => {
          return await request.delete('user.page.bank.card.unbind', params)
        },
        list: async data => {
          return await request.get('user.page.bank.card.list')
        },
        default: {
          get: async () => {
            return await request.get('user.page.bank.card.default.get')
          }
        },
        defaults: async data => {
          return await request.put('user.page.bank.card.default', data)
        },
        check: async data => {
          return await request.post('user.page.bank.card.check', data)
        }
      }
    },
    nick: {
      update: async data => {
        return await request.put('user.page.nick.update', data)
      }
    },
    sms: {
      send: async data => {
        return await request.post('user.page.sms.send', data)
      },
      code: {
        verify: async params => {
          return await request.get('user.page.sms.code.verify', params)
        }
      }
    },
    avatar: {
      update: async data => {
        return await request.put('user.page.avatar.update', data)
      }
    },
    apply: {
      distribution: {
        add: async data => {
          return await request.post('user.page.apply.distribution.add', data)
        }
      }
    },
    certify: {
      status: {
        set: async data => {
          return await request.put('user.page.certify.status.set', data)
        }
      },
      list: async params => {
        return await request.get('user.page.certify.list', params)
      },
      delete: async params => {
        return await request.delete('user.page.certify.delete', params)
      },
      update: async data => {
        return await request.put('user.page.certify.update', data)
      },
      add: async data => {
        return await request.post('user.page.certify.add', data)
      },
      get: async params => {
        return await request.get('user.page.certify.get', params)
      }
    },
    distributor: {
      get: async params => {
        return await request.get('user.page.distributor.get', params)
      }
    },
    account: {
      register: async data => {
        return await request.post('user.page.account.register', data)
      }
    },
    identity: {
      check: async data => {
        return await request.post('user.page.identity.check', data)
      }
    }
  }
}
