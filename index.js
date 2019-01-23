'use strict';

const
	sortClassMemberOrdering = require('./helper/sortClassMemberOrdering')
;

module.exports = {
	extends: [
		'eslint:recommended'
	],
	plugins: [
		'sort-class-members'
	],
	rules: {
		'accessor-pairs': 'error',
		// 'array-bracket-newline': 'off',
		'array-bracket-spacing': 'error',
		'array-callback-return': 'error',
		// 'array-element-newline': 'off',
		// 'arrow-body-style': 'off',
		// 'arrow-parens': 'off',
		'arrow-spacing': [
			'error', {
				'after': true,
				'before': true
			}
		],
		'block-scoped-var': 'error',
		'block-spacing': [
			'error', 'never'
		],
		'brace-style': [
			'error',
			'1tbs', {
				'allowSingleLine': true
			}
		],
		'callback-return': 'error',
		// 'camelcase': 'off',
		// 'capitalized-comments': 'off',
		// 'class-methods-use-this': 'off',
		// 'comma-dangle': 'off',
		'comma-spacing': [
			'error', {
				'after': true,
				'before': false
			}
		],
		'comma-style': [
			'error', 'last'
		],
		'complexity': 'error',
		'computed-property-spacing': [
			'error', 'never'
		],
		// 'consistent-return': 'off',
		'consistent-this': [
			2, 'self'
		],
		'curly': 'error',
		// 'default-case': 'off',
		'dot-location': [
			'error', 'property'
		],
		'dot-notation': 'error',
		'eol-last': 'error',
		'eqeqeq': 'error',
		// 'for-direction': 'error',
		// 'func-call-spacing': 'off',
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
		// 'function-paren-newline': 'off',
		'generator-star-spacing': 'error',
		// 'getter-return': 'error',
		// 'global-require': 'off',
		'guard-for-in': 'error',
		'handle-callback-err': 'error',
		'id-blacklist': 'error',
		// 'id-length': 'off',
		'id-match': 'error',
		// 'implicit-arrow-linebreak': 'off',
		// 'indent': 'off',
		// 'indent-legacy': 'off',
		// 'init-declarations': 'off',
		'jsx-quotes': 'error',
		'key-spacing': 'error',
		'keyword-spacing': [
			2, {}
		],
		// 'line-comment-position': 'off',
		'linebreak-style': [
			'error', 'unix'
		],
		'lines-around-comment': 'error',
		'lines-around-directive': 'error',
		'lines-between-class-members': [
			'error', 'always'
		],
		'max-depth': 'error',
		// 'max-len': 'off',
		'max-lines': [
			'error', {
				'max': 350,
				'skipBlankLines': true
			}
		],
		'max-nested-callbacks': 'error',
		// 'max-params': 'off',
		// 'max-statements': 'off',
		'max-statements-per-line': 'error',
		'multiline-comment-style': [
			'error', 'separate-lines'
		],
		// 'multiline-ternary': 'off',
		// 'new-parens': 'error',
		// 'newline-after-var': 'off',
		// 'newline-before-return': 'off',
		// 'newline-per-chained-call': 'off',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'error',
		'no-buffer-constructor': 'error',
		'no-caller': 'error',
		// 'no-catch-shadow': 'error',
		'no-confusing-arrow': 'error',
		'no-continue': 'error',
		'no-div-regex': 'error',
		'no-duplicate-imports': 'error',
		// 'no-else-return': 'off',
		'no-empty-function': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		// 'no-extra-parens': 'off',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': [
			'error', {
				'boolean': false,
				'number': false,
				'string': false
			}
		],
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		// 'no-inline-comments': 'off',
		'no-inner-declarations': [
			'error', 'functions'
		],
		// 'no-invalid-this': 'off',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		// 'no-magic-numbers': 'off',
		// 'no-mixed-operators': 'off',
		// 'no-mixed-requires': 'off',
		// 'no-multi-assign': 'off',
		// 'no-multi-spaces': 'off',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'error',
		'no-native-reassign': 'error',
		// 'no-negated-condition': 'off',
		'no-negated-in-lhs': 'error',
		'no-nested-ternary': 'error',
		// 'no-new': 'off',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		// 'no-param-reassign': 'off',
		'no-path-concat': 'error',
		// 'no-plusplus': 'off',
		// 'no-process-env': 'off',
		'no-process-exit': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-restricted-globals': 'error',
		'no-restricted-imports': 'error',
		'no-restricted-modules': 'error',
		'no-restricted-properties': 'error',
		'no-restricted-syntax': 'error',
		// 'no-return-assign': 'off',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		// 'no-sequences': 'off',
		// 'no-shadow': 'off',
		'no-shadow-restricted-names': 'error',
		// 'no-spaced-func': 'off',
		'no-sync': 'error',
		// 'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		// 'no-ternary': 'off',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		// 'no-undefined': 'off',
		// 'no-underscore-dangle': 'off',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		// 'no-unused-expressions': 'off',
		// 'no-use-before-define': 'off',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		// 'no-var': 'off',
		'no-void': 'error',
		'no-warning-comments': 'error',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'nonblock-statement-body-position': 'error',
		// 'object-curly-newline': 'off',
		'object-curly-spacing': [
			'error', 'never'
		],
		'object-property-newline': [
			'error', {
				'allowMultiplePropertiesPerLine': true
			}
		],
		// 'object-shorthand': 'off',
		'one-var': 'error',
		'one-var-declaration-per-line': [
			'error', 'initializations'
		],
		// 'operator-assignment': 'off',
		'operator-linebreak': [
			'error', 'after'
		],
		// 'padded-blocks': 'off',
		'padding-line-between-statements': 'error',
		// 'prefer-arrow-callback': 'off',
		'prefer-const': 'error',
		// 'prefer-destructuring': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-promise-reject-errors': 'error',
		// 'prefer-reflect': 'off',
		// 'prefer-rest-params': 'off',
		// 'prefer-spread': 'off',
		// 'prefer-template': 'off',
		// 'quote-props': 'off',
		'quotes': [
			'error',
			'single', {
				'allowTemplateLiterals': true
			}
		],
		'radix': [
			'error', 'always'
		],
		'require-await': 'error',
		// 'require-jsdoc': 'off',
		'rest-spread-spacing': 'error',
		'semi': 'error',
		'semi-spacing': 'error',
		// 'semi-style': 'off',
		// 'sort-imports': 'off',
		// 'sort-keys': 'off',
		// 'sort-vars': 'off',
		// 'space-before-blocks': 'off',
		// 'space-before-function-paren': 'off',
		'space-in-parens': [
			'error', 'never'
		],
		// 'space-infix-ops': 'off',
		'space-unary-ops': [
			'error', {
				'nonwords': false,
				'words': false
			}
		],
		// 'spaced-comment': 'off',
		'strict': 'error',
		'switch-colon-spacing': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': [
			'error', 'never'
		],
		// 'vars-on-top': 'off',
		'wrap-regex': 'error',
		'yield-star-spacing': 'error',
		'sort-class-members/sort-class-members': [2, sortClassMemberOrdering()]
	}
};
