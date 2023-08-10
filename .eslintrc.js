module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:import/typescript', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [{
    files: ['**/src/**/*/.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'i18next', 'react-hooks'],
  rules: {
    'no-tabs': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'i18next/no-literal-string': ['warn'],
    'no-mixed-spaces-and-tab': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    'import/no-absolute-path': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
