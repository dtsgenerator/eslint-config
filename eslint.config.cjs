const dtsgenerator = require("./index.js");

module.exports = [
  ...dtsgenerator,
  {
    files: ["**/*_test.ts"],
    rules: {
      "@typescript-eslint/no-floating-promises": "off",
    },
  },
];
