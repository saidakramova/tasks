const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext][query]', // Handle assets like images and fonts
  },
  module: {
    rules: [
      // Rule for handling images
      {
        test: /\.(svg|jpg|jpeg|png|gif)$/i,
        type: 'asset/resource',
      },
      // Rule for handling SCSS
      {
        test: /\.scss$/i,
        use: [
          'style-loader',  // Injects styles into DOM
          'css-loader',    // Resolves CSS imports
          'sass-loader'    // Compiles Sass to CSS
        ],
      },
      // Rule for handling JS files
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Rule for handling fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8082, // Change this to another available port if needed
  },
};
