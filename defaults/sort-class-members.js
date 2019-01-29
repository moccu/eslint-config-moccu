'use strict';

const
	{List} = require('../helper')
;


module.exports.CLASS_MEMBER_ORDER = new List(
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
);


module.exports.CLASS_MEMBER_GROUPS = {
	'accessor-pairs-public': [{'name': '/[a-z].+/', 'accessorPair': true}],
	'accessor-pairs-private': [{'name': '/_.+/', 'accessorPair': true}],
	'event-handlers-public': [{'name': '/(on|handle).+/', 'type': 'method'}],
	'event-handlers-private': [{'name': '/_(on|handle).+/', 'type': 'method'}]
};
