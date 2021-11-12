module.exports = {
  env: {
    node: true,
    browser: false,
    es2021: true,
  },
  extends: [`eslint:recommended`, `plugin:@typescript-eslint/recommended`],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 13,
    sourceType: `module`,
  },
  plugins: [`@typescript-eslint`],
  rules: {
    indent: [`warn`, 2],
    quotes: [`warn`, `backtick`],
    semi: [`warn`, `never`],
  },
}
