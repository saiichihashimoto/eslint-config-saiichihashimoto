/* eslint key-spacing: ['error', { beforeColon: false, afterColon: true }] */

module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		es6: true,
		node: true,
	},
	plugins: [
		'css-modules',
		'import',
		'node',
		'you-dont-need-lodash-underscore',
	],
	rules: {
		'import/exports-last': 'error',
		'import/first': [
			'error',
			{
				'absolute-first': true,
			},
		],
		'import/no-cycle': 'error',
		'import/no-extraneous-dependencies': 'error',
		'import/order': 'error',
		'import/prefer-default-export': 'off',

		'jsx-a11y/anchor-has-content': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',

		'node/no-deprecated-api': 'error',
		'node/process-exit-as-throw': 'error',

		'react/jsx-closing-bracket-location': [
			'error',
			'after-props',
		],
		'react/jsx-filename-extension': 'off',
		'react/jsx-handler-names': 'error',
		'react/jsx-indent': [
			'error',
			'tab',
		],
		'react/jsx-indent-props': [
			'error',
			'tab',
		],
		'react/jsx-key': 'error',
		'react/jsx-no-bind': 'error',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				noSortAlphabetically: true,
				reservedFirst: true,
				shorthandFirst: true,
			},
		],
		'react/destructuring-assignment': [
			'error',
			'always',
			{
				ignoreClassFields: true,
			},
		],
		'react/no-direct-mutation-state': 'error',
		'react/no-multi-comp': 'off',
		'react/no-unescaped-entities': [
			'error',
			{
				forbid: [
					'>',
					'}',
				],
			},
		],
		'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],
		'react/prop-types': 'off',

		'arrow-parens': [
			'error',
			'always',
		],
		'default-case': 'off',
		'eqeqeq': 'error',
		'indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'key-spacing': [
			'error',
			{
				align: 'value',
				beforeColon: false,
				afterColon: true,
			},
		],
		'keyword-spacing': 'error',
		'lines-between-class-members': [
			'error',
			'never',
		],
		'new-cap': [
			'error',
			{
				capIsNew: false,
				newIsCapExceptions: [
					'require',
				],
			},
		],
		'no-console': 'error',
		'no-fallthrough': [
			'error',
			{
				commentPattern: 'fallthrough',
			},
		],
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 0,
				maxBOF: 0,
			},
		],
		'no-tabs': 'off',
		'no-trailing-spaces': 'error',
		'no-use-before-define': 'error',
		'no-useless-call': 'error',
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					multiline: true,
					consistent: true,
				},
				ObjectPattern: {
					multiline: true,
					consistent: true,
				},
				ImportDeclaration: {
					multiline: true,
					consistent: true,
				},
				ExportDeclaration: {
					multiline: true,
					consistent: true,
				},
			},
		],
		'operator-linebreak': [
			'error',
			'after',
		],
		'prefer-object-spread': 'error',
		'quote-props': [
			'error',
			'consistent-as-needed',
			{
				keywords: false,
				unnecessary: true,
				numbers: false,
			},
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'spaced-comment': [
			'error',
			'always',
		],
	},
	overrides: [
		{
			files: [
				'*.spec.js',
				'*.test.js',
			],
			env: {
				jest: true,
			},
		},
		{
			files: [
				'*.spec.js',
				'*.test.js',
				'*.web.js',
			],
			settings: {
				'import/resolver': {
					node: {
						extensions: [
							'.web.js',
							'.js',
						],
					},
				},
			},
			env: {
				browser: true,
				commonjs: true,
			},
			rules: {
				'import/no-extraneous-dependencies': [
					'error',
					{
						devDependencies: true,
						optionalDependencies: false,
					},
				],
			},
		},
	],
};
