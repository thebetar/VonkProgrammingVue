module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    '@vue/typescript'
  ],

  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closest-bracket-newline': 'off',
    'vue/html-self-closing': 'off'
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
