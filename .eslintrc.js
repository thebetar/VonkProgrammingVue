module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'eslint:recommended',   
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    "@vue/eslint-config-typescript",
    '@vue/typescript'
  ],

  rules: {
    'vue-scoped-css/enforce-style-type': 'off',
  },

  ignorePatterns: [
    'dist/*',
    'node_modules/*',
    'public/*',
    'backup/*',
  ],


  parser: "vue-eslint-parser",
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: "latest",
  }
};
