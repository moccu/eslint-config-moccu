'use strict';

module.exports = {
	extends: [
		'plugin:react/recommended'
	],
	plugins: [
		'react'
	],
	rules: {
		'react/button-has-type': [2],
		'react/display-name': 'off',
		'react/no-access-state-in-setstate': [2],
		'react/no-unused-state': [2],
		'react/require-render-return': [2],
		'react/jsx-curly-spacing': [2, {'when': 'never', 'allowMultiline': true}],
		'react/jsx-equals-spacing': [2, 'never'],
		'react/jsx-no-bind': [2],
		'react/jsx-curly-brace-presence': [2],
		'react/jsx-fragments': [2, 'element'],
		'react/jsx-pascal-case': [2],
		'react/jsx-props-no-multi-spaces': [2],
		'react/jsx-sort-props': [2, {
			'callbacksLast': true,
			'ignoreCase': true,
			'noSortAlphabetically': false,
			'reservedFirst': true
		}],
		'react/jsx-tag-spacing': [2, {
			'closingSlash': 'never',
			'beforeSelfClosing': 'always',
			'afterOpening': 'never',
			'beforeClosing': 'never'
		}],
		'react/jsx-wrap-multilines': [2, {
			'declaration': 'parens',
			'assignment': 'parens',
			'return': 'parens',
			'arrow': 'parens',
			'condition': 'parens',
			'logical': 'parens',
			'prop': 'parens'
		}]
	}
};
