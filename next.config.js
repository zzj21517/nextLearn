const path = require('path')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const {
  resolve
} = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin({
      dry:true,
      verbose:true,
      cleanOnceBeforeBuildPatterns:[]
    }) //所要清理的文件夹名称
  ]
}