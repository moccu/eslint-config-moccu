const
	{CLASS_MEMBER_GROUPS, CLASS_MEMBER_ORDER} = require('./defaults/sort-class-members'),
	_package = require('./package.json'),
	js = require('@eslint/js'),
	sortClassMembers = require('eslint-plugin-sort-class-members'),
	plugin = {
		meta: {
			name: _package.name,
   			version: _package.version
		},
		configs: {},
		rules: {
			'accessor-pairs': 'error',
			'array-callback-return': 'error',
			'block-scoped-var': 'error',
			'complexity': 'error',
			'consistent-this': [
				2, 'self'
			],
			'curly': 'error',
			'dot-notation': 'error',
			'eqeqeq': 'error',
			'func-name-matching': 'error',
			'func-names': [
				'error', 'never'
			],
			'func-style': [
				'error',
				'declaration', {
					'allowArrowFunctions': true
				}
			],
			'guard-for-in': 'error',
			'id-match': 'error',
			'max-depth': 'error',
			'max-lines': [
				'error', {
					'max': 350,
					'skipBlankLines': true
				}
			],
			'max-nested-callbacks': 'error',
			'no-alert': 'error',
			'no-array-constructor': 'error',
			'no-await-in-loop': 'error',
			'no-bitwise': 'error',
			'no-caller': 'error',
			'no-continue': 'error',
			'no-div-regex': 'error',
			'no-duplicate-imports': 'error',
			'no-empty-function': 'error',
			'no-eq-null': 'error',
			'no-eval': 'error',
			'no-extend-native': 'error',
			'no-extra-bind': 'error',
			'no-extra-label': 'error',
			'no-implicit-coercion': [
				'error', {
					'boolean': false,
					'number': false,
					'string': false
				}
			],
			'no-implicit-globals': 'error',
			'no-implied-eval': 'error',
			'no-inner-declarations': [
				'error', 'functions'
			],
			'no-iterator': 'error',
			'no-label-var': 'error',
			'no-labels': 'error',
			'no-lone-blocks': 'error',
			'no-lonely-if': 'error',
			'no-loop-func': 'error',
			'no-multi-str': 'error',
			'no-nested-ternary': 'error',
			'no-new-func': 'error',
			'no-new-wrappers': 'error',
			'no-octal-escape': 'error',
			'no-proto': 'error',
			'no-prototype-builtins': 'error',
			'no-restricted-globals': 'error',
			'no-restricted-imports': 'error',
			'no-restricted-properties': 'error',
			'no-restricted-syntax': 'error',
			'no-script-url': 'error',
			'no-self-compare': 'error',
			'no-shadow-restricted-names': 'error',
			'no-template-curly-in-string': 'error',
			'no-throw-literal': 'error',
			'no-undef-init': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unneeded-ternary': 'error',
			'no-useless-call': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-concat': 'error',
			'no-useless-constructor': 'error',
			'no-useless-rename': 'error',
			'no-useless-return': 'error',
			'no-void': 'error',
			'no-warning-comments': 'error',
			'no-with': 'error',
			'one-var': 'error',
			'prefer-const': 'error',
			'prefer-numeric-literals': 'error',
			'prefer-promise-reject-errors': 'error',
			'radix': [
				'error', 'always'
			],
			'require-await': 'error',
			'strict': 'error',
			'symbol-description': 'error',
			'unicode-bom': [
				'error', 'never'
			],
			'sort-class-members/sort-class-members': [2, {
				order: CLASS_MEMBER_ORDER,
				groups: CLASS_MEMBER_GROUPS
			}]
		}
	}
;

plugin.configs = {
	recommended: {
		extends: ['eslint:recommended'],
		plugins: ['sort-class-members'],
		rules: plugin.rules
	},
	'flat/recommended': {
		...js.configs.recommended,
		plugins: {
			'sort-class-members': sortClassMembers
		},
		rules: plugin.rules
	}
};

module.exports = plugin;
