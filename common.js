module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "promise"],
  extends: ["prettier", "plugin:promise/recommended"],
  rules: {
    "prefer-const": "error",
    camelcase: ["error", { allow: ["_.*Fragment"] }],
    "no-trailing-spaces": "error",
    "require-await": "error",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-console": [
      "error",
      {
        allow: [
          "info",
          "debug",
          "warn",
          "error",
          "group",
          "groupCollapsed",
          "groupEnd",
        ],
      },
    ],

    // plugin rules
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "@typescript-eslint/consistent-type-imports": "error",
    "promise/prefer-await-to-then": "error",
  },
};
