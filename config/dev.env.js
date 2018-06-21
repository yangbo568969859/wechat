var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEPLOY_ENV: `"${process.env.DEPLOY_ENV}"`
})
