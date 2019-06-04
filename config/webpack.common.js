const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:8].[ext]',
            outputPath: 'imgs'
          }
        }
      }
    ]
  }
}
