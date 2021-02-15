const TerserPlugin = require("terser-webpack-plugin");

const minifyCode = () =>
  new TerserPlugin({
    terserOptions: {
      ecma: 2016,
      compress: true,
    },
  });

module.exports = minifyCode;
