// This registers Typescript compiler instance onto node.js.

// Now it is possible to just require typescript files without any compilation steps in the environment run by node

require('ts-node').register()

// re-export our rules so that eslint run by node can understand them

module.exports = {
  rules: {
    'lowercase-first-declarations': require('./rules/lowercase-first-declarations').default,
  }
}
