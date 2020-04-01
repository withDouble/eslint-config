module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'standard-with-typescript',
  ],

  plugins: [
    '@typescript-eslint',
  ],

  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'after-used',
      vars: 'all',
      ignoreRestSiblings: true,
    }],
  },
}
