module.exports = {
  root: true,

  env: {
    node: true,
    webextensions: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn'
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ]
};
