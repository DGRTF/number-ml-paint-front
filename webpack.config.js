const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/App.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        // loader:
        use:[
          'ts-loader',
        //  "babel-loader",
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
  resolve: { extensions: ["*", ".ts", ".tsx",'.js'] },
  output: {
    path: path.resolve(__dirname, "public/dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};