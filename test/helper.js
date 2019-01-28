'use strict';

const
	assert = require('assert'),

	{List} = require('../helper')
;


(function () {
	const
		list = new List(1, 2, 3),
		clone = list.insert('a').before(3)
	;

	assert.notEqual(clone, list);
	assert.deepEqual(clone, [1, 2, 'a', 3]);
})();


(function () {
	const list = new List(1, 2, 3);

	assert.deepEqual(
		list
			.insert('a').before(1)
			.insert('b').before(42),
		['b', 'a', 1, 2, 3]
	);
})();


(function () {
	const
		list = new List(1, 2, 3),
		clone = list.insert('a').after(3)
	;

	assert.notEqual(clone, list);
	assert.deepEqual(clone, [1, 2, 3, 'a']);
})();


(function () {
	const list = new List(1, 2, 3);

	assert.deepEqual(
		list
			.insert('a').after(1)
			.insert('b').after(42),
		[1, 'a', 2, 3, 'b']
	);
})();


(function () {
	const list = new List(1, 2, 3);

	assert.deepEqual(
		list
			.insert('a').before(1)
			.insert('c').after('a')
			.insert('b').before('c'),
		['a', 'b', 'c', 1, 2, 3]
	);
})();
