var common = require("./common");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react-hooks", "react"].concat(common.plugins),
  extends: ["plugin:react-hooks/recommended"].concat(common.extends),
  rules: Object.assign(common.rules, {
    "react/jsx-key": ["error", { checkFragmentShorthand: true }],
    "react/jsx-curly-brace-presence": ["error", "always"],
  }),
  env: {
    browser: true,
  },
};
