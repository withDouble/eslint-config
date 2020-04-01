module.exports = {
  root: true,

  env: {
    node: true,
    browser: false,
  },

  extends: [
    './base/typescript',
    './base/javascript',
  ],

  parserOptions: {
    project: './tsconfig.json',
  },
}
