module.exports = {
  root: true,

  env: {
    node: true,
    browser: false,
  },

  extends: [
    './base/javascript-extends',
    './base/typescript-extends',
    './base/javascript-rules',
    './base/typescript-rules',
  ],

  parserOptions: {
    project: './tsconfig.json',
  },
}
