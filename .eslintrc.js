module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [
    {
      parser: "@typescript-eslint/parser",
    },
    {
      files: ["**/*.js?(x)"],
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2015,
      },
    },
  ],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
