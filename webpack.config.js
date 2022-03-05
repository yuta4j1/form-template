const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: "./src/index.tsx",
    form1: "./src/pages/form1.tsx",
    form2: "./src/pages/form2.tsx",
    file_upload: "./src/pages/file-upload.tsx",
    todo: "./src/pages/todo.tsx",
    camera: "./src/pages/camera.tsx",
  },
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist/assets"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      minify: false,
      templateParameters: { isDev: false },
    }),
  ],
}
