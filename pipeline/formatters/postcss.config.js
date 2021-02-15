const { postcss } = require('postcss-preset-env');

const ENV_PRESET = require('postcss-preset-env');

const mqPacker = require('css-mqpacker');
const cssMqpacker = require('css-mqpacker');

const config = {
  plugins: [
    ENV_PRESET({
      browsers: 'last 2 versions',
    }),
    cssMqpacker,
  ],
};

module.exports = config;
