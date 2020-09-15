// Should be almost the same as what was called `typescript`
module.exports = {
  env: {
    browser: true,
  },

  extends: [
    './base/javascript-extends',
    './base/javascript-rules',
    './base/react',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],

  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'after-used',
      vars: 'all',
      ignoreRestSiblings: true,
    }],
    '@typescript-eslint/explicit-function-return-type': 0,
  },
}
