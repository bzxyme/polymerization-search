module.exports = {
  transpileDependencies: ["vuetify"],

  //vue解决跨域问题
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.baidu.com/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/", //重写路径
        },
      },
    },
  },
};
