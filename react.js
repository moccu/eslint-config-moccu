'use strict';

const
	{CLASS_MEMBER_GROUPS, CLASS_MEMBER_ORDER} = require('./defaults/sort-class-members')
;

module.exports = {
	extends: [
		'plugin:react/recommended'
	],
	plugins: [
		'react',
		'sort-class-members'
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
		}],
		'sort-class-members/sort-class-members': [2, {
			order: CLASS_MEMBER_ORDER
				.insert('[framework-static-properties]').after('[static-properties]')
				.insert('[framework-static-methods]').after('[static-methods]')
				.insert('[framework-lifecycle-methods]').after('constructor'),
			groups: Object.assign({}, CLASS_MEMBER_GROUPS, {
				'framework-static-properties': [
					{'name': 'propTypes', 'type': 'property', 'static': true},
					{'name': 'defaultProps', 'type': 'property', 'static': true},
					{'name': 'state', 'type': 'property', 'static': true}
				],
				'framework-static-methods': [
					{'name': 'getDerivedStateFromProps', 'type': 'method', 'static': true}
				],
				'framework-lifecycle-methods': [
					{'name': 'componentWillMount', 'type': 'method'},
					{'name': 'UNSAFE_componentWillMount', 'type': 'method'},
					{'name': 'componentDidMount', 'type': 'method'},
					{'name': 'componentWillReceiveProps', 'type': 'method'},
					{'name': 'UNSAFE_componentWillReceiveProps', 'type': 'method'},
					{'name': 'shouldComponentUpdate', 'type': 'method'},
					{'name': 'componentWillUpdate', 'type': 'method'},
					{'name': 'UNSAFE_componentWillUpdate', 'type': 'method'},
					{'name': 'getSnapshotBeforeUpdate', 'type': 'method'},
					{'name': 'componentDidUpdate', 'type': 'method'},
					{'name': 'componentDidCatch', 'type': 'method'},
					{'name': 'componentWillUnmount', 'type': 'method'}
				]
			})
		}]
	}
};
