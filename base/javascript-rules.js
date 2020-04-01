module.exports = {
  rules: {
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '|>': 'before',
        '&&': 'before',
        '||': 'before',
      },
    }],

    'brace-style': ['error', 'stroustrup', {
      allowSingleLine: true,
    }],

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    'no-var': 'error',

    'new-cap': 'off',
    'no-unused-expressions': 'off',

    'promise/catch-or-return': ['error', {
      terminationMethod: ['catch', 'asCallback', 'finally'],
    }],

    'no-unused-vars': ['error', {
      args: 'after-used',
      vars: 'all',
      ignoreRestSiblings: true,
    }],

    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
  },
}
