const path = require('path');

module.exports = {
  entry: './app/javascript/packs/decidim_core.js',
  output: {
    path: path.resolve(__dirname, 'public/packs'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
