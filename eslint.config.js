module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-empty-interface': 0,
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'indent': [
      'error',
      'tab'
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    'linebreak-style': 0,
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  },
}
