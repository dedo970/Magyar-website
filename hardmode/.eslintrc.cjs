/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    // These opinionated rules are enabled in stylistic-type-checked above.
    // Feel free to reconfigure them to your own preference.
    'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }],
    "babel/no-unused-expressions": 1,

    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};

module.exports = config;
