const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
  entry: ['./src/javascripts/index.js', './src/stylesheets/style.scss'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'javascripts/build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
            },
          },
        ],
      },
    ],
  },
  /* webpack-dev-server */
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylesheets/style.css', // 원하는 filename
    }),
  ],
};

module.exports = config;
