function webpackProd() {
  const { code, styles } = require("./plugins");

  return {
    mode: "production",

    optimization: {
      minimize: true,
      minimizer: [code(), styles()],
      runtimeChunk: true,
      emitOnErrors: true,
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            minChunks: 2,
          },
        },
      },
      usedExports: true,
    },
  };
}

module.exports = webpackProd;
