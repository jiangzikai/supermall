module.exports = {
  lintOnSave: false,
  // 配置别名
  configureWebpack: {
    resolve: {
      // extensions: [],
      alias: {
        // 默认有这个 '@': 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }

}
