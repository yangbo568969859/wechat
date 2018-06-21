import axios from './fetch-api'

export default {
  page: {
    search: async(params) => {
      return await axios.get('item.page.search', {
        params
      })
    },
    detail: {
      get: async(params) => {
        const res = await axios.get('item.page.detail.get', {
          params
        })

        if (process.env.NODE_ENV === 'development') {
          res.item.props = [{
            'prop_id': 2,
            'prop_name': '颜色',
            'prop_type': 'sale',
            'sort': 1,
            'prop_values': [{
              'prop_img': 'http://img.aqsea.com/items/10001006/prop/2:4-20170224103910973-2047466367.jpg',
              'value_data': '红色',
              'value_id': 4
            }, {
              'prop_img': 'http://img.aqsea.com/items/10001232/prop/2:487-20170317114734927-314292553.jpg?imageView2/2/w/240/h/240',
              'value_data': '深蓝色',
              'value_id': 125
            }, {
              'prop_img': 'http://img.aqsea.com/items/10001232/prop/2:8-20170317114734867-877628979.jpg?imageView2/2/w/240/h/240',
              'value_data': '黑色',
              'value_id': 126
            }]
          }, {
            'prop_id': 7,
            'prop_name': '尺寸',
            'prop_type': 'sale',
            'sort': 2,
            'prop_values': [{
              'prop_img': '',
              'value_data': 'S',
              'value_id': 127
            }, {
              'prop_img': '',
              'value_data': 'M',
              'value_id': 128
            }, {
              'prop_img': '',
              'value_data': 'L',
              'value_id': 129
            }]
          }]
        }

        return res
      }
    },
    distribution: {
      detail: {
        get: async(params) => {
          const res = await axios.get('item.page.distribution.detail.get', {
            params
          })

          if (process.env.NODE_ENV === 'development') {
            res.item.props = [{
              'prop_id': 2,
              'prop_name': '颜色',
              'prop_type': 'sale',
              'sort': 1,
              'prop_values': [{
                'prop_img': 'http://img.aqsea.com/items/10001006/prop/2:4-20170224103910973-2047466367.jpg',
                'value_data': '红色',
                'value_id': 4
              }, {
                'prop_img': 'http://img.aqsea.com/items/10001232/prop/2:487-20170317114734927-314292553.jpg?imageView2/2/w/240/h/240',
                'value_data': '深蓝色',
                'value_id': 125
              }, {
                'prop_img': 'http://img.aqsea.com/items/10001232/prop/2:8-20170317114734867-877628979.jpg?imageView2/2/w/240/h/240',
                'value_data': '黑色',
                'value_id': 126
              }]
            }, {
              'prop_id': 7,
              'prop_name': '尺寸',
              'prop_type': 'sale',
              'sort': 2,
              'prop_values': [{
                'prop_img': '',
                'value_data': 'S',
                'value_id': 127
              }, {
                'prop_img': '',
                'value_data': 'M',
                'value_id': 128
              }, {
                'prop_img': '',
                'value_data': 'L',
                'value_id': 129
              }]
            }]
          }

          return res
        }
      },
      list: {
        get: async(params) => {
          return await axios.get('item.page.distribution.list.get', {
            params
          })
        }
      }
    },
    commission: {
      get: async(params) => {
        return await axios.get('item.page.commission.get', {
          params
        })
      }
    },
    favorite: {
      add: async(data) => {
        return await axios.post('item.page.favorite.add', data.item_id)
      },
      delete: async(params) => {
        return await axios.delete('item.page.favorite.delete', {
          params
        })
      },
      list: {
        get: async(params) => {
          return await axios.get('item.page.favorite.list.get', {
            params
          })
        }
      }
    },
    replenish: {
      add: async(data) => {
        return await axios.post('item.page.replenish.add', data.item_id)
      },
      delete: async(params) => {
        return await axios.delete('item.page.replenish.delete', {
          params
        })
      }
    },
    index: {
      get: async(params) => {
        return await axios.get('item.page.index.get', {
          params
        })
      }
    },
    agent: {
      index: {
        get: async(params) => {
          return await axios.get('item.page.agent.index.get', {
            params
          })
        }
      }
    }
  }
}