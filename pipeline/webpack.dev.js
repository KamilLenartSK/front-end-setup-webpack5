function webpackDev() {
  const { devServer } = require("./loaders");

  return {
    devtool: "eval-source-map",
    mode: "development",
    devServer: devServer.setupServer(),
  };
}

module.exports = webpackDev;
