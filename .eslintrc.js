module.exports = {
  env: {
    browser: true,
    'jest/globals': true,
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-prettier', 'react', 'jest'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: false,
        printWidth: 60,
        singleQuote: true,
      },
    ],
  },
}
