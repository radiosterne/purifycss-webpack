const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = function() {
  return merge(
    {
      entry: {
        app: PATHS.app
      },
      output: {
        path: PATHS.build,
        filename: '[name].js'
      }
    },
    parts.extractCSS(),
    parts.purifyCSS(PATHS.app)
  );
};
