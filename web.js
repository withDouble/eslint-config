module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "promise",
    "@withdouble/eslint-plugin-custom-rules",
    "react"
  ],
  extends: [
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:promise/recommended"
  ],
  rules: {
    "prefer-const": "error",
    "camelcase": ["error", { "allow": ["_.*Fragment"] }],
    "no-trailing-spaces": "error",
    "require-await": "error",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "info",
          "debug",
          "warn",
          "error",
          "group",
          "groupCollapsed",
          "groupEnd"
        ]
      }
    ],

    // plugin rules
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/array-type": ["error", { "default": "array" }],
    "promise/prefer-await-to-then": "error",
    "react/jsx-key": ["error", { "checkFragmentShorthand": true }],
    "react/jsx-curly-brace-presence": ["error", "always"],

    // custom rules
    "custom-rules/lowercase-first-declarations": "error",
  },
  env: {
    "browser": true
  }
}
