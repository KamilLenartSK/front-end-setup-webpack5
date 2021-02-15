const cssExtractPlugin = require("mini-css-extract-plugin");

const { configs } = require("../appPaths");

function loadCSS(mode) {
  const devMode = mode !== "prod";
  const plugins = devMode
    ? []
    : [
        new cssExtractPlugin({
          filename: "[name].css",
        }),
      ];

  const rules = {
    test: /\.s?css$/,
    exclude: /node_modules/,
    include: /src/,

    use: [
      devMode ? "style-loader" : cssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          importLoaders: 1, //how many additional loaders follow this
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            config: configs.postCSS,
          },
        },
      },
    ],
  };
  return { rules, plugins };
}
module.exports = Object.freeze({ loadCSS });
