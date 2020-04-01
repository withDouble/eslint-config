module.exports = {
  root: true,

  env: {
    node: true,
    browser: false,
  },

  extends: [
    './base/javascript',
    './base/typescript',
  ],

  parserOptions: {
    project: './tsconfig.json',
  },
}
