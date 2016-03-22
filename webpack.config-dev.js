var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.ProvidePlugin({
      //ie10 see https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.NoErrorsPlugin()
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        include: [
          APP_DIR,
        ],
        //ie10
        loaders : ['imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham','babel-loader']
      }
    ]
  }
};

module.exports = config;