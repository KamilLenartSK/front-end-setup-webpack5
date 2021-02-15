const path = require("path");
const fs = require("fs");

const { ROOT_DIR } = require("../settings");

const resolve = (relativePath) => path.resolve(ROOT_DIR, relativePath);

module.exports = {
  app: {
    entry: resolve("src/index.js"),
    dist: resolve("dist"),
    publicPath: "/",
    htmlTemplate: resolve("src/index.html"),
  },
  configs: {
    eslint: resolve("pipeline/formatters/.eslintrc.js"),
    postCSS: resolve("pipeline/formatters/postcss.config.js"),
  },
};
