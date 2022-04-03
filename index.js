module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  env: {
    node: true,
    es2021: true,
    mocha: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "no-var": "error",
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "prefer-const": "error",
    "sort-imports": "off",
    "import/order": ["error", { "alphabetize": { "order": "asc", "caseInsensitive": true }}],
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": ["error", { "allowConstantLoopConditions": true }],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/no-unused-vars": "off"
  },
};
