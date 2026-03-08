// .eslintrc.js
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-unused-vars': 'off', // Disable due to false positives with TypeScript
    'react-hooks/exhaustive-deps': 'warn',
    '@next/next/no-img-element': 'off', // Allow img elements for flexibility
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }], // Only warn on problematic entities
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};