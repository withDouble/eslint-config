module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  plugins: [
    '@typescript-eslint',
  ],

  overrides: [{
    // enable the rule specifically for TypeScript files
    files: ['*.ts', '*.tsx'],
    extends: [
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
  }],
}
