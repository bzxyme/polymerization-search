module.exports = {
  transpileDependencies: ["vuetify"],
  //解决打包后找不到文件问题
  publicPath: "./",

  //vue解决跨域问题
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://www.baidu.com/",
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "/", //重写路径
  //       },
  //     },
  //   },
  // },
};
