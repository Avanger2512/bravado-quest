const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  test: /\.vue(\.erb|\.slim)?$/,
  exclude: /node_modules/,
  use: 'vue-loader',
}
