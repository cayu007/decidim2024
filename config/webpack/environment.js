const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// Configuración para jQuery, si es necesario
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))

// Agregar loader para CSS
environment.loaders.append('css', {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
})

module.exports = environment
