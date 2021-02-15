const paths = require("../appPaths");

function load() {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    use: {
      loader: "babel-loader",
    },
  };
}
function lint() {
  return {
    test: /\.js$/,
    enforce: "pre",
    exclude: /node_modules/,
    include: /src/,
    use: {
      loader: "eslint-loader",
      options: { configFile: paths.configs.eslint },
    },
  };
}

module.exports = Object.freeze({ lint, load });
