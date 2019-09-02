const path = require('path')

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'babel-eslint',
  plugins: [
    'better-styled-components',
    'sort-destructure-keys'
  ],
  rules: {
    'better-styled-components/sort-declarations-alphabetically': 'error',
    'import/namespace': ['error', {
      allowComputed: true
    }],
    'import/no-named-as-default': 'off',
    'no-console': 'off',
    'object-shorthand': 'error',
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: ['return', 'try']
    }],
    'prettier/prettier': ['error', {
      semi: false,
      singleQuote: true
    }],
    'react/default-props-match-prop-types': 'error',
    'react/display-name': 'off',
    'react/jsx-sort-props': ['error', {
      ignoreCase: true
    }],
    'react/no-unused-prop-types': 'error',
    'react/sort-prop-types': ['error', {
      ignoreCase: true
    }],
    'sort-keys': ['error', 'asc', {
      caseSensitive: false,
      natural: true
    }],
    'sort-destructure-keys/sort-destructure-keys': 'error'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack/webpack.common.js')
      }
    },
    react: {
      version: 'detect'
    }
  }
}
