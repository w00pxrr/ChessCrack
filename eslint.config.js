export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        browser: true,
        self: true,
        Worker: true
      }
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];