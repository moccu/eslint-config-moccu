'use strict';

module.exports = function(additionalOrder = [], additionalGroups = {}) {
	const
		defaultOrder = [
			'[static-properties]',
			'[static-methods]',
			'constructor',
			'[properties]',
			'[arrow-function-properties]',
			'[conventional-private-properties]',
			'[accessor-pairs-public]',
			'[accessor-pairs-private]',
			'[getters]',
			'[setters]',
			'render',
			'[methods]',
			'[event-handlers-public]',
			'[event-handlers-private]'
		],
		defaultGroups = {
			'accessor-pairs-public': [{'name': '/[a-z].+/', 'accessorPair': true}],
			'accessor-pairs-private': [{'name': '/_.+/', 'accessorPair': true}],
			'event-handlers-public': [{'name': '/[on|handle].+/', 'type': 'method'}],
			'event-handlers-private': [{'name': '/_[on|handle].+/', 'type': 'method'}]
		},
		groups = Object.assign({}, defaultGroups, additionalGroups),
		order = defaultOrder
	;

	additionalOrder.forEach(({name, insertAt, insertMethod}) => {
		let
			indexInsertName = defaultOrder.indexOf(insertAt)
		;

		if (insertMethod === 'after') {
			indexInsertName++;
		}

		order.splice(indexInsertName, 0, name);
	});

	return {
		order,
		groups
	};
};
