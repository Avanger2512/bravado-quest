const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const VueLoaderConfig = require('./loaders/vue')

environment.loaders.append('VueLoaderConfig', VueLoaderConfig)
environment.plugins.append('VueLoaderPlugin', new VueLoaderPlugin())

module.exports = environment
