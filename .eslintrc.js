/* eslint-disable import/no-commonjs, import/no-unused-modules */
const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
	parser:        'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		'react': {
			version: 'detect',
		},
		'import/extensions': [
			'.node.mjs',
			'.web.mjs',
			'.mjs',
			'.node.js',
			'.web.js',
			'.js',
			'.node.ts',
			'.web.ts',
			'.ts',
			'.node.tsx',
			'.web.tsx',
			'.tsx',
			'.json',
			'.node.jsx',
			'.web.jsx',
			'.jsx',
			'.node',
		],
	},

	/*
	 *extends: [
	 *    'airbnb',
	 *    'plugin:css-modules/recommended',
	 *    'plugin:jest/recommended',
	 *    'plugin:promise/recommended',
	 *    'plugin:you-dont-need-lodash-underscore/all',
	 *    'plugin:you-dont-need-momentjs/recommended',
	 *    'plugin:unicorn/recommended',
	 *],
	 */

	env: {
		es6:  true,
		node: true,
	},
	plugins: [
		'import',
		'react',
	],

	/*
	 *plugins: [
	 *    'css-modules',
	 *    'jsx-a11y',
	 *    'node',
	 *    'promise',
	 *    'react-hooks',
	 *    'unicorn',
	 *    'you-dont-need-lodash-underscore',
	 *    'you-dont-need-momentjs',
	 *],
	 */

	rules: {
		// https://eslint.org/docs/rules/#possible-errors
		'for-direction':             'off',
		'getter-return':             'off',
		'no-async-promise-executor': 'error',
		'no-await-in-loop':          'error',
		'no-compare-neg-zero':       'error',
		'no-cond-assign':            ['error', 'always'],
		'no-console':                ['error'],
		'no-constant-condition':     'error',
		'no-control-regex':          'off',
		'no-debugger':               'error',
		'no-dupe-args':              'error',
		'no-dupe-keys':              'error',
		'no-duplicate-case':         'error',
		'no-empty-character-class':  'error',
		'no-empty':                  ['error', { allowEmptyCatch: true }],
		'no-ex-assign':              'error',
		'no-extra-boolean-cast':     'error',
		'no-extra-parens':           ['error', 'all', {
			conditionalAssign:           true,
			enforceForArrowConditionals: false,
			ignoreJSX:                   'multi-line',
			nestedBinaryExpressions:     false,
			returnAssign:                true,
		}],
		'no-extra-semi':           'error',
		'no-func-assign':          'error',
		'no-inner-declarations':   ['error', 'both'],
		'no-invalid-regexp':       'error',
		'no-irregular-whitespace': ['error', {
			skipComments:  true,
			skipRegExps:   true,
			skipStrings:   true,
			skipTemplates: true,
		}],
		'no-misleading-character-class': 'error',
		'no-obj-calls':                  'error',
		'no-prototype-builtins':         'error',
		'no-regex-spaces':               'error',
		'no-sparse-arrays':              'error',
		'no-template-curly-in-string':   'error',
		'no-unexpected-multiline':       'error',
		'no-unreachable':                'error',
		'no-unsafe-finally':             'error',
		'no-unsafe-negation':            'error',
		'require-atomic-updates':        'error',
		'use-isnan':                     'error',
		'valid-typeof':                  ['error', { requireStringLiterals: true }],

		// https://eslint.org/docs/rules/#best-practices
		'accessor-pairs':         'off',
		'array-callback-return':  'error',
		'block-scoped-var':       'error',
		'class-methods-use-this': 'warn',
		'complexity':             'off',
		'consistent-return':      ['error', { treatUndefinedAsUnspecified: true }],
		'curly':                  ['error', 'all'],
		'default-case':           'off',
		'dot-location':           ['error', 'object'],
		'dot-notation':           'error',
		'eqeqeq':                 ['error', 'always'],
		'guard-for-in':           'off',
		'max-classes-per-file':   'off',
		'no-alert':               'error',
		'no-caller':              'error',
		'no-case-declarations':   'off',
		'no-div-regex':           'error',
		'no-else-return':         ['error', { allowElseIf: false }],
		'no-empty-function':      ['error', { allow: ['arrowFunctions', 'methods'] }],
		'no-empty-pattern':       'error',
		'no-eq-null':             'error',
		'no-eval':                'error',
		'no-extend-native':       'error',
		'no-extra-bind':          'error',
		'no-extra-label':         'error',
		'no-fallthrough':         'error',
		'no-floating-decimal':    'error',
		'no-global-assign':       'error',
		'no-implicit-coercion':   'error',
		'no-implicit-globals':    'off',
		'no-implied-eval':        'error',
		'no-invalid-this':        'error',
		'no-iterator':            'error',
		'no-labels':              'error',
		'no-lone-blocks':         'error',
		'no-loop-func':           'error',
		'no-magic-numbers':       ['error', {
			detectObjects:      false,
			enforceConst:       true,
			ignoreArrayIndexes: true,
		}],
		'no-multi-spaces':          ['error', { ignoreEOLComments: true }],
		'no-multi-str':             'error',
		'no-new':                   'error',
		'no-new-func':              'error',
		'no-new-wrappers':          'error',
		'no-octal':                 'error',
		'no-octal-escape':          'error',
		'no-param-reassign':        ['error', { props: true }],
		'no-proto':                 'error',
		'no-redeclare':             'error',
		'no-restricted-properties': [
			'error',
			{ object: 'arguments', property: 'callee', message: 'arguments.callee is deprecated' },
			{ object: 'global', property: 'isFinite', message: 'Please use Number.isFinite instead' },
			{ object: 'self', property: 'isFinite', message: 'Please use Number.isFinite instead' },
			{ object: 'window', property: 'isFinite', message: 'Please use Number.isFinite instead' },
			{ object: 'global', property: 'isNaN', message: 'Please use Number.isNaN instead' },
			{ object: 'self', property: 'isNaN', message: 'Please use Number.isNaN instead' },
			{ object: 'window', property: 'isNaN', message: 'Please use Number.isNaN instead' },
			{ property: '__defineGetter__', message: 'Please use Object.defineProperty instead.' },
			{ property: '__defineSetter__', message: 'Please use Object.defineProperty instead.' },
			{ object: 'Math', property: 'pow', message: 'Use the exponentiation operator (**) instead.' },
		],
		'no-return-assign':             ['error', 'always'],
		'no-return-await':              'error',
		'no-script-url':                'error',
		'no-self-assign':               'error',
		'no-self-compare':              'error',
		'no-sequences':                 'error',
		'no-throw-literal':             'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions':        ['error', { allowShortCircuit: false, allowTaggedTemplates: false, allowTernary: false }],
		'no-unused-labels':             'error',
		'no-useless-call':              'error',
		'no-useless-catch':             'error',
		'no-useless-concat':            'error',
		'no-useless-escape':            'error',
		'no-useless-return':            'error',
		'no-void':                      'error',
		'no-warning-comments':          'off',
		'no-with':                      'error',
		'prefer-named-capture-group':   'error',
		'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
		'radix':                        'error',
		'require-await':                'error',
		'require-unicode-regexp':       'error',
		'vars-on-top':                  'error',
		'wrap-iife':                    ['error', 'outside', { functionPrototypeMethods: false }],
		'yoda':                         'error',

		// https://eslint.org/docs/rules/#strict-mode
		'strict': ['error', 'never'],

		// https://eslint.org/docs/rules/#variables
		'init-declarations':          'off',
		'no-delete-var':              'error',
		'no-label-var':               'error',
		'no-restricted-globals':      ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),
		'no-shadow':                  'error',
		'no-shadow-restricted-names': 'error',
		'no-undef':                   'error',
		'no-undef-init':              'error',
		'no-undefined':               'off',
		'no-unused-vars':             ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
		'no-use-before-define':       ['error', { functions: true, classes: true, variables: true }],
		'callback-return':            ['error', ['callback', 'cb', 'done', 'next']],
		'global-require':             'error',
		'handle-callback-err':        'error',
		'no-buffer-constructor':      'error',
		'no-mixed-requires':          'off',
		'no-new-require':             'error',
		'no-path-concat':             'error',
		'no-process-env':             'off',
		'no-process-exit':            'off',
		'no-restricted-modules':      'off',
		'no-sync':                    'off',

		// https'://eslint.org/docs/rules/#stylistic-issues
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': ['error', 'consistent'],
		'block-spacing':         ['error', 'always'],
		'brace-style':           ['error', '1tbs', { allowSingleLine: true }],
		'camelcase':             ['error', { properties: 'always' }],
		'capitalized-comments':  'off',
		'comma-dangle':          ['error', {
			arrays:    'always-multiline',
			exports:   'always-multiline',
			functions: 'never',
			imports:   'always-multiline',
			objects:   'always-multiline',
		}],
		'comma-spacing':             ['error', { after: true, before: false }],
		'comma-style':               ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this':           'off',
		'eol-last':                  ['error', 'never'],
		'func-call-spacing':         ['error', 'never'],
		'func-name-matching':        ['error', 'always'],
		'func-names':                ['error', 'as-needed'],
		'func-style':                ['error', 'expression'],
		'function-paren-newline':    ['error', 'multiline'],
		'id-blacklist':              'off',
		'id-length':                 'off',
		'id-match':                  'off',
		'implicit-arrow-linebreak':  ['error', 'beside'],
		'indent':                    ['error', 'tab', {
			ArrayExpression:     1,
			CallExpression:      { arguments: 1 },
			FunctionDeclaration: {
				body:       1,
				parameters: 1,
			},
			ImportDeclaration:      1,
			MemberExpression:       1,
			ObjectExpression:       1,
			SwitchCase:             1,
			VariableDeclarator:     'first',
			flatTernaryExpressions: false,
			ignoreComments:         false,
			ignoredNodes:           ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
			outerIIFEBody:          1,
		}],
		'jsx-quotes':            ['error', 'prefer-double'],
		'key-spacing':           ['error', { afterColon: true, align: 'value', beforeColon: false, mode: 'strict' }],
		'keyword-spacing':       ['error', { after: true, before: true }],
		'line-comment-position': 'off',
		'linebreak-style':       ['error', 'unix'],
		'lines-around-comment':  ['error', {
			afterBlockComment:  true,
			afterLineComment:   false,
			allowArrayEnd:      true,
			allowArrayStart:    true,
			allowBlockEnd:      true,
			allowBlockStart:    true,
			allowClassEnd:      true,
			allowClassStart:    true,
			allowObjectEnd:     true,
			allowObjectStart:   true,
			beforeBlockComment: true,
			beforeLineComment:  false,
		}],
		'lines-between-class-members': ['error', 'never'],
		'max-depth':                   'off',
		'max-len':                     ['error', {
			code:                   100,
			ignoreComments:         false,
			ignoreRegExpLiterals:   true,
			ignoreStrings:          true,
			ignoreTemplateLiterals: true,
			ignoreTrailingComments: true,
			ignoreUrls:             true,
			tabWidth:               4,
		}],
		'max-lines':               'off',
		'max-lines-per-function':  'off',
		'max-nested-callbacks':    'off',
		'max-params':              'off',
		'max-statements':          'off',
		'max-statements-per-line': ['error', { max: 1 }],
		'multiline-comment-style': ['error', 'starred-block'],
		'multiline-ternary':       ['error', 'always-multiline'],
		'new-cap':                 ['error', {
			capIsNew:           false,
			capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
			newIsCap:           true,
			newIsCapExceptions: [],
		}],
		'new-parens':               ['error', 'always'],
		'newline-per-chained-call': 'error',
		'no-array-constructor':     'error',
		'no-bitwise':               'error',
		'no-continue':              'off',
		'no-inline-comments':       'off',
		'no-lonely-if':             'error',
		'no-mixed-operators':       ['error', { allowSamePrecedence: false }],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-assign':          'error',
		'no-multiple-empty-lines':  ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
		'no-negated-condition':     'error',
		'no-nested-ternary':        'error',
		'no-new-object':            'error',
		'no-plusplus':              ['error', { allowForLoopAfterthoughts: true }],
		'no-restricted-syntax':     [
			'error',
			{ selector: 'ForInStatement', message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.' },
			{ selector: 'ForOfStatement', message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.' },
			{ selector: 'LabeledStatement', message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.' },
			{ selector: 'WithStatement', message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.' },
		],
		'no-tabs':                          ['error', { allowIndentationTabs: true }],
		'no-ternary':                       'off',
		'no-trailing-spaces':               ['error', { ignoreComments: false, skipBlankLines: false }],
		'no-underscore-dangle':             ['error', { allow: [], allowAfterThis: false, allowAfterSuper: false, enforceInMethodNames: true }],
		'no-unneeded-ternary':              ['error', { defaultAssignment: false }],
		'no-whitespace-before-property':    'error',
		'nonblock-statement-body-position': 'off',
		'object-curly-newline':             ['error', {
			ExportDeclaration: 'always',
			ImportDeclaration: {
				multiline:  true,
				consistent: true,
			},
			ObjectExpression: {
				multiline:  true,
				consistent: true,
			},
			ObjectPattern: {
				multiline:  true,
				consistent: true,
			},
		}],
		'object-curly-spacing':            ['error', 'always', { arraysInObjects: true, objectsInObjects: true }],
		'object-property-newline':         ['error', { allowAllPropertiesOnSameLine: true }],
		'one-var':                         ['error', 'never'],
		'one-var-declaration-per-line':    ['error', 'always'],
		'operator-assignment':             ['error', 'always'],
		'operator-linebreak':              ['error', 'before', { overrides: { '=': 'none' } }],
		'padded-blocks':                   ['error', 'never'],
		'padding-line-between-statements': [
			'error',
			// Padding After
			{ blankLine: 'always', prev: 'cjs-import', next: '*' },
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'always', prev: 'import', next: '*' },

			// Padding Before
			{ blankLine: 'always', prev: '*', next: 'break' },
			{ blankLine: 'always', prev: '*', next: 'cjs-export' },
			{ blankLine: 'always', prev: '*', next: 'continue' },
			{ blankLine: 'always', prev: '*', next: 'export' },
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: '*', next: 'throw' },

			// Padding Around
			{ blankLine: 'always', prev: 'class', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'class' },
			{ blankLine: 'always', prev: 'do', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'do' },
			{ blankLine: 'always', prev: 'for', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'for' },
			{ blankLine: 'always', prev: 'function', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'function' },
			{ blankLine: 'always', prev: 'iife', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'iife' },
			{ blankLine: 'always', prev: 'switch', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'switch' },
			{ blankLine: 'always', prev: 'try', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'try' },
			{ blankLine: 'always', prev: 'while', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'while' },

			// Never
			{ blankLine: 'never', prev: 'case', next: '*' },
			{ blankLine: 'never', prev: '*', next: 'case' },
			{ blankLine: 'never', prev: 'default', next: '*' },
			{ blankLine: 'never', prev: '*', next: 'default' },
		],
		'prefer-object-spread':        'error',
		'quote-props':                 ['error', 'consistent-as-needed'],
		'quotes':                      ['error', 'single'],
		'semi':                        ['error', 'always'],
		'semi-spacing':                ['error', { before: false, after: true }],
		'semi-style':                  ['error', 'last'],
		'sort-keys':                   'off',
		'sort-vars':                   'off',
		'space-before-blocks':         ['error', 'always'],
		'space-before-function-paren': ['error', { anonymous: 'never', asyncArrow: 'always', named: 'never' }],
		'space-in-parens':             ['error', 'never'],
		'space-infix-ops':             'error',
		'space-unary-ops':             ['error', { nonwords: false, words: true }],
		'spaced-comment':              ['error', 'always', { block: { balanced: true } }],
		'switch-colon-spacing':        ['error', { after: true, before: false }],
		'template-tag-spacing':        ['error', 'never'],
		'unicode-bom':                 ['error', 'never'],
		'wrap-regex':                  'error',

		// https://eslint.org/docs/rules/#ecmascript-6
		'arrow-body-style':        ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
		'arrow-parens':            ['error', 'always'],
		'arrow-spacing':           ['error', { before: true, after: true }],
		'constructor-super':       'error',
		'generator-star-spacing':  ['error', { before: false, after: true }],
		'no-class-assign':         'error',
		'no-confusing-arrow':      ['error', { allowParens: true }],
		'no-const-assign':         'error',
		'no-dupe-class-members':   'error',
		'no-duplicate-imports':    'error',
		'no-new-symbol':           'error',
		'no-restricted-imports':   'off',
		'no-this-before-super':    'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor':  'error',
		'no-useless-rename':       'error',
		'no-var':                  'error',
		'object-shorthand':        ['error', 'always', {
			avoidExplicitReturnArrows: true,
			avoidQuotes:               true,
			ignoreConstructors:        false,
		}],
		'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
		'prefer-const':          'error',
		'prefer-destructuring':  [
			'error',
			{
				VariableDeclarator:   { array: false, object: true },
				AssignmentExpression: { array: true, object: true },
			},
			{ enforceForRenamedProperties: false },
		],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params':      'error',
		'prefer-spread':           'error',
		'prefer-template':         'error',
		'require-yield':           'error',
		'rest-spread-spacing':     ['error', 'never'],
		'sort-imports':            'error',
		'symbol-description':      'error',
		'template-curly-spacing':  ['error', 'never'],
		'yield-star-spacing':      ['error', 'after'],

		// https://github.com/benmosher/eslint-plugin-import#static-analysis
		'import/no-unresolved':              ['error', { commonjs: true }],
		'import/named':                      'error',
		'import/default':                    'error',
		'import/namespace':                  'error',
		'import/no-restricted-paths':        'off',
		'import/no-absolute-path':           'error',
		'import/no-dynamic-require':         'error',
		'import/no-internal-modules':        'off',
		'import/no-webpack-loader-syntax':   'error',
		'import/no-self-import':             'error',
		'import/no-cycle':                   'error',
		'import/no-useless-path-segments':   'error',
		'import/no-relative-parent-imports': 'off',
		'import/no-unused-modules':          ['error', {
			missingExports: true,
			unusedExports:  false, // This always breaks when true, even if we disable it via comments
		}],

		// https://github.com/benmosher/eslint-plugin-import#helpful-warnings
		'import/export':                     'error',
		'import/no-deprecated':              'warn',
		'import/no-extraneous-dependencies': ['error', {
			devDependencies: [
				'**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
				'**/Gruntfile{,.js}', // grunt config
				'**/__mocks__/**', // jest pattern
				'**/__tests__/**', // jest pattern
				'**/gulpfile.*.js', // gulp config
				'**/gulpfile.js', // gulp config
				'**/jest.config.js', // jest config
				'**/jest.setup.js', // jest setup
				'**/protractor.conf.*.js', // protractor config
				'**/protractor.conf.js', // protractor config
				'**/rollup.config.*.js', // rollup config
				'**/rollup.config.js', // rollup config
				'**/vue.config.js', // vue-cli config
				'**/webpack.config.*.js', // webpack config
				'**/webpack.config.js', // webpack config
				'spec/**', // mocha, rspec-like pattern
				'test-*.{js,jsx}', // repos with multiple top-level test files
				'test.{js,jsx}', // repos with a single test file
				'test/**', // tape, common npm pattern
				'tests/**', // also common npm pattern
			],
			optionalDependencies: false,
		}],
		'import/no-mutable-exports':         'error',
		'import/no-named-as-default':        'error',
		'import/no-named-as-default-member': 'error',

		// https://github.com/benmosher/eslint-plugin-import#module-systems
		'import/no-amd':      'error',
		'import/no-commonjs': 'error',
		'import/unambiguous': 'off',

		// https://github.com/benmosher/eslint-plugin-import#style-guide
		'import/dynamic-import-chunkname': 'off',
		'import/exports-last':             'error',
		'import/extensions':               ['error', 'always', {
			'node.mjs': 'never',
			'web.mjs':  'never',
			'mjs':      'never',
			'node.js':  'never',
			'web.js':   'never',
			'js':       'never',
			'node.ts':  'never',
			'web.ts':   'never',
			'ts':       'never',
			'node.tsx': 'never',
			'web.tsx':  'never',
			'tsx':      'never',
			'json':     'never',
			'node.jsx': 'never',
			'web.jsx':  'never',
			'jsx':      'never',
			'node':     'never',
		}],
		'import/first':                       'error',
		'import/group-exports':               'error',
		'import/max-dependencies':            'off',
		'import/newline-after-import':        'error',
		'import/no-anonymous-default-export': 'off',
		'import/no-default-export':           'off',
		'import/no-duplicates':               'error',
		'import/no-named-default':            'error',
		'import/no-named-export':             'off',
		'import/no-namespace':                'error',
		'import/no-unassigned-import':        'off',
		'import/order':                       ['error', {
			'groups':           ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			'newlines-between': 'always',
		}],
		'import/prefer-default-export': 'off',

		// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
		'react/boolean-prop-naming':                  'off',
		'react/button-has-type':                      'error',
		'react/default-props-match-prop-types':       ['error', { allowRequiredDefaults: true }],
		'react/destructuring-assignment':             ['error', 'always'],
		'react/display-name':                         ['error', { ignoreTranspilerName: false }],
		'react/forbid-component-props':               'off',
		'react/forbid-dom-props':                     'off',
		'react/forbid-elements':                      'off',
		'react/forbid-foreign-prop-types':            'off',
		'react/forbid-prop-types':                    'off',
		'react/no-access-state-in-setstate':          'error',
		'react/no-array-index-key':                   'error',
		'react/no-children-prop':                     'error',
		'react/no-danger':                            'error',
		'react/no-danger-with-children':              'error',
		'react/no-deprecated':                        'error',
		'react/no-did-mount-set-state':               'error',
		'react/no-did-update-set-state':              'error',
		'react/no-direct-mutation-state':             'error',
		'react/no-find-dom-node':                     'error',
		'react/no-is-mounted':                        'error',
		'react/no-multi-comp':                        'off',
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value':               'error',
		'react/no-set-state':                         'off',
		'react/no-string-refs':                       'error',
		'react/no-this-in-sfc':                       'error',
		'react/no-typos':                             'error',
		'react/no-unescaped-entities':                'error',
		'react/no-unknown-property':                  'error',
		'react/no-unsafe':                            'error',
		'react/no-unused-prop-types':                 'error',
		'react/no-unused-state':                      'error',
		'react/no-will-update-set-state':             'error',
		'react/prefer-es6-class':                     ['error', 'always'],
		'react/prefer-read-only-props':               'off',
		'react/prefer-stateless-function':            'error',
		'react/prop-types':                           'off',
		'react/react-in-jsx-scope':                   'error',
		'react/require-default-props':                ['error', { forbidDefaultForRequired: true }],
		'react/require-optimization':                 'off',
		'react/require-render-return':                'error',
		'react/self-closing-comp':                    'error',
		'react/sort-comp':                            ['error', {
			order: [
				'static-methods',
				'instance-variables',
				'lifecycle',
				'/^on.+$/',
				'getters',
				'setters',
				'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'instance-methods',
				'everything-else',
				'rendering',
			],
			groups: {
				lifecycle: [
					'displayName',
					'propTypes',
					'contextTypes',
					'childContextTypes',
					'mixins',
					'statics',
					'defaultProps',
					'constructor',
					'getDefaultProps',
					'getInitialState',
					'state',
					'getChildContext',
					'componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'componentDidUpdate',
					'componentWillUnmount',
				],
				rendering: [
					'/^render.+$/',
					'render',
				],
			},
		}],
		'react/sort-prop-types': ['error', {
			callbacksLast:        true,
			ignoreCase:           false,
			noSortAlphabetically: false,
			requiredFirst:        true,
			sortShapeProp:        true,
		}],
		'react/state-in-constructor':          ['error', 'never'],
		'react/static-property-placement':     ['error', 'static public field'],
		'react/style-prop-object':             'error',
		'react/void-dom-elements-no-children': 'error',

		// https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
		'react/jsx-boolean-value':            ['error', 'never'],
		'react/jsx-child-element-spacing':    'off',
		'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
		'react/jsx-closing-tag-location':     'error',
		'react/jsx-curly-newline':            ['error', 'consistent'],
		'react/jsx-curly-spacing':            ['error', { when: 'never', children: true }],
		'react/jsx-equals-spacing':           ['error', 'never'],
		'react/jsx-filename-extension':       'off',
		'react/jsx-first-prop-new-line':      ['error', 'multiline'],
		'react/jsx-handler-names':            ['off', { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }],
		'react/jsx-indent':                   ['error', 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
		'react/jsx-indent-props':             ['error', 'tab'],
		'react/jsx-key':                      'error',
		'react/jsx-max-depth':                'off',
		'react/jsx-max-props-per-line':       ['error', { maximum: 1, when: 'multiline' }],
		'react/jsx-no-bind':                  ['error', {
			allowArrowFunctions: true,
			allowBind:           false,
			allowFunctions:      false,
			ignoreDOMComponents: false,
			ignoreRefs:          false,
		}],
		'react/jsx-no-comment-textnodes':    'error',
		'react/jsx-no-duplicate-props':      'error',
		'react/jsx-no-literals':             'off',
		'react/jsx-no-target-blank':         ['error', { enforceDynamicLinks: 'always' }],
		'react/jsx-no-undef':                ['error', { allowGlobals: true }],
		'react/jsx-one-expression-per-line': 'error',
		'react/jsx-curly-brace-presence':    ['error', { props: 'never', children: 'never' }],
		'react/jsx-fragments':               ['error', 'syntax'],
		'react/jsx-pascal-case':             'error',
		'react/jsx-props-no-multi-spaces':   'error',
		'react/jsx-props-no-spreading':      'off',
		'react/jsx-sort-default-props':      'error',
		'react/jsx-sort-props':              ['off', {
			callbacksLast:        true,
			ignoreCase:           false,
			noSortAlphabetically: true,
			reservedFirst:        true,
			shorthandFirst:       true,
			shorthandLast:        false,
		}],
		'react/jsx-tag-spacing': ['error', {
			afterOpening:      'never',
			beforeClosing:     'never',
			beforeSelfClosing: 'always',
			closingSlash:      'never',
		}],
		'react/jsx-uses-react':      'error',
		'react/jsx-uses-vars':       'error',
		'react/jsx-wrap-multilines': ['error', {
			arrow:       'parens-new-line',
			assignment:  'parens-new-line',
			condition:   'parens-new-line',
			declaration: 'parens-new-line',
			logical:     'parens-new-line',
			prop:        'parens-new-line',
			return:      'parens-new-line',
		}],
	},
	overrides: [
		{
			files:    ['*.web.js'],
			settings: {
				'import/extensions': [
					'web.mjs',
					'mjs',
					'web.js',
					'js',
					'web.ts',
					'ts',
					'web.tsx',
					'tsx',
					'json',
					'web.jsx',
					'jsx',
				],
			},
			env:   { browser: true, node: false },
			rules: {
				'import/extensions': ['error', 'always', {
					'web.mjs': 'never',
					'mjs':     'never',
					'web.js':  'never',
					'js':      'never',
					'web.ts':  'never',
					'ts':      'never',
					'web.tsx': 'never',
					'tsx':     'never',
					'json':    'never',
					'web.jsx': 'never',
					'jsx':     'never',
				}],
				'import/no-nodejs-modules': 'error',
			},
		},
		{
			files:    ['*.node.js'],
			settings: {
				'import/extensions': [
					'.node.mjs',
					'.mjs',
					'.node.js',
					'.js',
					'.node.ts',
					'.ts',
					'.node.tsx',
					'.tsx',
					'.json',
					'.node.jsx',
					'.jsx',
					'.node',
				],
			},
			env:   { node: true },
			rules: {
				'import/extensions': ['error', 'always', {
					'node.mjs': 'never',
					'mjs':      'never',
					'node.js':  'never',
					'js':       'never',
					'node.ts':  'never',
					'ts':       'never',
					'node.tsx': 'never',
					'tsx':      'never',
					'json':     'never',
					'node.jsx': 'never',
					'jsx':      'never',
					'node':     'never',
				}],
			},
		},
		{
			files: [
				'*.spec.js',
				'*.test.js',
			],
			env: {
				jest: true,
			},
			plugins: [
				'jest',
			],
			rules: {
				'jest/prefer-called-with': 'error',
			},
		},
	],
};