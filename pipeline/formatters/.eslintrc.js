const config = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-vars': 0,
    'no-console': 0,
  },
};
module.exports = config;
