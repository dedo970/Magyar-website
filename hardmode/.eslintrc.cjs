/** @type {import("eslint").Linter.Config} */
const config = {
  parserOptions: {
    project: true,
  },
  extends: [
    "next/core-web-vitals",
  ],
  rules: {
    // These opinionated rules are enabled in stylistic-type-checked above.
    // Feel free to reconfigure them to your own preference.
  },
};

module.exports = config;
