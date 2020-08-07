/**
 * ? Reference: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
 */
module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {}
}
