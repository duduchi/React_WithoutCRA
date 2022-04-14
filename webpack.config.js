const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development", // 개발환경
  entry: "./src/index.js", // 어플리케이션 시작 경로
  output: {
    // 번들된 파일 경로
    filename: "bundle.[hash].js",
  },

  // loader란? webPack이 관리하는 비자바스크립트 파일을 webPack이 이해할 수 있게 해주는 역할

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 빌드할 파일 확장자 정규식
        exclude: /node_modules/, // 제외할 파일 정규식
        use: {
          loader: "babel-loader", // 사용할 로더 이름
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              // 로더 옵션
              minimize: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],

  //  개발 서버 설정
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
};
