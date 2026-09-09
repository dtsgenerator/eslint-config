# eslint-config
Common ESLint flat config for packages in the dtsgenerator organization.

## Requirements

- Node.js `^22.22.2` or `>=24.15.0`
- ESLint `^10.0.0`
- TypeScript `>=5.4.5 <6.1.0`

## Usage

Create `eslint.config.cjs` in the consuming package:

```js
const dtsgenerator = require("@dtsgenerator/eslint-config");

module.exports = [
  ...dtsgenerator,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["**/*_test.ts"],
    rules: {
      "@typescript-eslint/no-floating-promises": "off",
    },
  },
];
```

The shared config uses the TypeScript ESLint project service, so each source
file is checked with the nearest `tsconfig.json` in the consuming package.
Consumer-specific rules and test-file overrides belong after the shared config
entries, as shown above.
