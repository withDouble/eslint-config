module.exports = {
  parser: 'babel-eslint',

  extends: [
    'plugin:flowtype/recommended',
  ],

  plugins: [
    'babel',
    'flowtype',
  ],

  rules: {
    'babel/new-cap': ['error', {
      newIsCap: true,
      capIsNew: false,
    }],
    'babel/no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    }],
    'babel/quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
  },
}
