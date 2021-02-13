const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

let rootDirectory = '';
let devTool = 'eval-source-map';

module.exports = (env, options) => {
  if (options.mode === 'production') {
    rootDirectory = '';
    devTool = true;
  }

  return {
    target: ['web', 'es3'],
    entry: "./src/App.tsx",
    devtool: devTool,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          // loader:
          use: [
            'ts-loader',
            //  "babel-loader",
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
            publicPath: rootDirectory + "/fonts"
          }
        },
        {
          test: /\.(svg|jpeg|jpg)$/,
          include: [path.join(__dirname, "src/assets")],
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img',
            publicPath: rootDirectory + "/img"
          }
        },
        {
          test: /\.scss$/,
          use: [
            // Creates `style` nodes from JS strings
            { loader: 'style-loader' },
            // {
            //     loader: MiniCssExtractPlugin.loader,
            // },
            // Translates CSS into CommonJS
            { loader: 'css-loader' },
            // { loader: 'postcss-loader' },
            // { loader: 'resolve-url-loader' },
            {
              // Compiles Sass to CSS
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
      ]
    },
    resolve: { extensions: ["*", ".ts", ".tsx", '.js'] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: rootDirectory,
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/",
      hotOnly: false,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        // favicon: "./public/favicon.ico"
      }),
    ]
  }
}
