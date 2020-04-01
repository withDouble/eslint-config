module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  plugins: [
    '@typescript-eslint',
  ],

  rules: {
    '@typescript-eslint/brace-style': ['error', 'stroustrup', {
      allowSingleLine: true,
    }],

    '@typescript-eslint/new-cap': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',

    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'after-used',
      vars: 'all',
      ignoreRestSiblings: true,
    }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'after-used',
      vars: 'all',
      ignoreRestSiblings: true,
    }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    '@typescript-eslint/brace-style': ['error', 'stroustrup', {
      allowSingleLine: true,
    }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
    '@typescript-eslint/ban-ts-ignore': 'warn',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': 'warn',

    // Disable for all files, will be enabled by override below
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  },

  overrides: [{
    // enable the rule specifically for TypeScript files
    files: ['*.ts', '*.tsx'],
    extends: [
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
      '@typescript-eslint/explicit-function-return-type': ['warn', {
        allowExpressions: true,
      }],

      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
      '@typescript-eslint/no-var-requires': 'warn',
    },
  }],
}
