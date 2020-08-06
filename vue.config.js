// vue.config.js
module.exports = {
  devServer: {
    host: '',
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {// 重写路径，详见：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
          '^/api': '/static/mock'
        }
      }
    },
    disableHostCheck: true // 绕过主机检查
  }
}
