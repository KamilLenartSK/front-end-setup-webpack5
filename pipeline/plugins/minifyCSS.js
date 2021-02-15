const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const minifyCSS = () => new CssMinimizerPlugin();

module.exports = minifyCSS;
