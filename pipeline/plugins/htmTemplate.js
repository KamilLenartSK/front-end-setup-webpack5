const HtmlWebpackPlugin = require("html-webpack-plugin");
const { app } = require("../appPaths");

function createHTML() {
  return new HtmlWebpackPlugin({
    inject: true,
    hash: true,
    template: app.htmlTemplate,
    filename: "index.html",
    title: "Exercises",
    minify: {
      collapseWhitespace: true,
      removeEmptyAttributes: true,
      useShortDoctype: true,
      removeRedundantAttributes: true,
      removeComments: true,
    },
  });
}

module.exports = Object.freeze({ createHTML });
