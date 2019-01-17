'use strict';

module.exports = {
	extends: [
		'plugin:react/recommended'
	],
	plugins: [
		'react'
	],
	rules: {
		'react/boolean-prop-naming': [2, {'rule': '^(is|has)[A-Z]([A-Za-z0-9]?)+'}],
		'react/button-has-type': [2],
		'react/display-name': 'off',
		'react/no-access-state-in-setstate': [2],
		'react/no-children-prop': [2],
		'react/no-direct-mutation-state': [2],
		'react/no-multi-comp': [2, {'ignoreStateless': true}],
		'react/no-string-refs': [2],
		'react/no-unknown-property': [2],
		'react/no-unused-prop-types': [2],
		'react/no-unused-state': [2],
		'react/prop-types': [2],
		'react/require-default-props': [2],
		'react/require-render-return': [2],
		'react/sort-prop-types': [2, {
			'callbacksLast': true,
			'ignoreCase': true,
			'requiredFirst': true,
			'sortShapeProp': true,
			'noSortAlphabetically': false
		}],
		'react/jsx-boolean-value': [2, 'always'],
		'react/jsx-curly-spacing': [2, {'when': 'never', 'allowMultiline': true}],
		'react/jsx-equals-spacing': [2, 'never'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-key': [2],
		'react/jsx-no-bind': [2],
		'react/jsx-no-comment-textnodes': [2],
		'react/jsx-no-duplicate-props': [2],
		'react/jsx-no-target-blank': [2],
		'react/jsx-curly-brace-presence': [2],
		'react/jsx-fragments': [2, 'element'],
		'react/jsx-pascal-case': [2],
		'react/jsx-props-no-multi-spaces': [2],
		'react/jsx-sort-props': [2, {
			'callbacksLast': true,
			'ignoreCase': true,
			'noSortAlphabetically': true,
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
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
		// 'react/default-props-match-prop-types': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
		// 'react/destructuring-assignment': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
		// 'react/forbid-component-props': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
		// 'react/forbid-dom-props': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
		// 'react/forbid-elements': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
		// 'react/forbid-prop-types': [2, {'forbid': ['any', 'array', 'object']}],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
		// 'react/forbid-foreign-prop-types': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
		// 'react/no-array-index-key': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		// 'react/no-danger': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		// 'react/no-danger-with-children': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		// 'react/no-deprecated': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
		// 'react/no-did-mount-set-state': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
		// 'react/no-did-update-set-state': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
		// 'react/no-find-dom-node': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
		// 'react/no-is-mounted': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
		// 'react/no-redundant-should-component-update': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
		// 'react/no-render-return-value': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
		// 'react/no-set-state': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
		// 'react/no-this-in-sfc': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		// 'react/no-unescaped-entities': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
		// 'react/no-unsafe': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
		// 'react/no-will-update-set-state': [2],
		// 'react/prefer-es6-class': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		// 'react/prefer-stateless-function': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		// 'react/react-in-jsx-scope': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
		// 'react/require-optimization': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		// 'react/self-closing-comp': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
		// 'react/style-prop-object': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
		// 'react/void-dom-elements-no-children': [2]
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
		// 'react/jsx-child-element-spacing': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
		// 'react/jsx-closing-bracket-location': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
		// 'react/jsx-closing-tag-location': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		// 'react/jsx-filename-extension': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
		// 'react/jsx-first-prop-new-line': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
		// 'react/jsx-handler-names': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
		// 'react/jsx-max-depth': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
		// 'react/jsx-max-props-per-line': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
		// 'react/jsx-no-literals': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		// 'react/jsx-no-undef': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
		// 'react/jsx-one-expression-per-line': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
		// 'react/jsx-sort-default-props': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
		// 'react/jsx-space-before-closing': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		// 'react/jsx-uses-react': [2],
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
		// 'react/jsx-uses-vars': [2],
	}
};
