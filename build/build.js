// 编译单vue组件

const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

compiler.run((err, stat) => {
  if (err) {
    console.log(err);
  }
  console.log(stat);
});