const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  webpack: (config, {
    buidId,
    dev,
    isServer,
    defaultLoaders,
    webpack
  }) => {
    // console.log(config.plugins, 'config')
    config.plugins.unshift(new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [`!${path.join(process.cwd(),'.next/server/pages-manifest.json')}`]
    }))
    return config
  }
}