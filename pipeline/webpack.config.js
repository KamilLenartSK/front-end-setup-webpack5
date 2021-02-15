const { merge } = require("webpack-merge");

const webpackShared = require("./webpack.common.js");

module.exports = ({ NODE_ENV }) => {
  const envWebpack = require(`./webpack.${NODE_ENV}.js`);
  console.log(envWebpack);

  return merge(webpackShared(NODE_ENV), envWebpack());
};
