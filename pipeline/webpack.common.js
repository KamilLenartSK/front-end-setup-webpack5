const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { code, styles } = require("./loaders");
const paths = require("./appPaths");
const { html } = require("./plugins");

function webpackShared(env) {
  const environment = env || "dev";
  const css = styles.loadCSS(environment);
  return {
    devtool: "source-map",
    entry: paths.app.entry,
    output: {
      filename: "build.[contenthash].js",
      path: paths.app.dist,
      publicPath: "/",
      assetModuleFilename: "assets/[hash:8][ext]",
    },
    module: {
      rules: [code.lint(), code.load(), css.rules],
    },
    plugins: [new CleanWebpackPlugin(), html.createHTML(), ...css.plugins],
  };
}

module.exports = webpackShared;
