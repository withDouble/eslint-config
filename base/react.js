module.exports = {
  extends: [
    'standard-react',
  ],

  plugins: [
    'compat',
  ],

  rules: {
    'compat/compat': 'error',

    'react/display-name': 2,
    'react/jsx-curly-brace-presence': ['error', {
      props: 'always',
      children: 'ignore',
    }],
    'react/jsx-no-literals': ['error', {
      noStrings: false,
    }],
    'react/jsx-handler-names': 'off',
  },

  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        // https://github.com/yannickcr/eslint-plugin-react/issues/1461
        'react/prop-types': 'off',
      },
    },
  ],
}
