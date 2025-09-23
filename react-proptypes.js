// @TODO: Add flat config

module.exports = {
	plugins: [
		'react'
	],
	rules: {
		'react/boolean-prop-naming': [2, {'rule': '^(is|has|can)[A-Z]([A-Za-z0-9]?)+'}],
		'react/no-unused-prop-types': [2],
		'react/require-default-props': [2],
		'react/sort-prop-types': [2, {
			'callbacksLast': true,
			'ignoreCase': true,
			'requiredFirst': true,
			'sortShapeProp': true,
			'noSortAlphabetically': false
		}]
	}
};
