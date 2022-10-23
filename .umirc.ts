import { defineConfig } from 'umi';
const path = require('path');
const DefinePlugin = require('webpack').DefinePlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cesiumSourcePath = 'node_modules/mars3d-cesium/Build/Cesium/'; // cesium库安装目录
const cesiumRunPath = './mars3d-cesium/'; // cesium运行时路径

export default defineConfig({
  chainWebpack(config) {
    config.plugin('DefinePlugin').use(DefinePlugin, [
      {
        CESIUM_BASE_URL: JSON.stringify(cesiumRunPath),
      },
    ]);
    config.plugin('CopyWebpackPlugin').use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: path.join(cesiumSourcePath, 'Workers'),
            to: path.join(cesiumRunPath, 'Workers'),
          },
          {
            from: path.join(cesiumSourcePath, 'Assets'),
            to: path.join(cesiumRunPath, 'Assets'),
          },
          {
            from: path.join(cesiumSourcePath, 'ThirdParty'),
            to: path.join(cesiumRunPath, 'ThirdParty'),
          },
          {
            from: path.join(cesiumSourcePath, 'Widgets'),
            to: path.join(cesiumRunPath, 'Widgets'),
          },
        ],
      },
    ]);
  },
  fastRefresh: {},
  webpack5: {},
});
