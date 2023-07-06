module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'react',
		'react-hooks'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-trailing-spaces': 'error',

		'arrow-body-style': ['error', 'as-needed'],
		'react-hooks/exhaustive-deps': 'error',
		'object-curly-spacing': ['error', 'always'],

		'@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/method-signature-style': ['error', 'property'],
		'@typescript-eslint/explicit-function-return-type': ['error', {
			allowExpressions: true,
			allowHigherOrderFunctions: true
		}],
		'react/react-in-jsx-scope': 'off'
	}
};
