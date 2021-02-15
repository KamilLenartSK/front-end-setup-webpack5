const { app } = require("../appPaths");

function setupServer() {
  return {
    contentBase: app.dist,
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 3000,
    compress: true,
    hot: true,
    historyApiFallback: true,
    publicPath: app.publicPath,
  };
}
module.exports = Object.freeze({ setupServer });
