'use strict';

const
	assert = require('assert'),

	{List} = require('../helper')
;


(function () {
	const list = new List(1, 2, 3);

	assert.equal(list.insert('a').before(3), list);
	assert.deepEqual(list, [1, 2, 'a', 3]);
})();


(function () {
	const list = new List(1, 2, 3);

	list
		.insert('a').before(1)
		.insert('b').before(42);

	assert.deepEqual(list, ['b', 'a', 1, 2, 3]);
})();


(function () {
	const list = new List(1, 2, 3);

	assert.equal(list.insert('a').after(3), list);
	assert.deepEqual(list, [1, 2, 3, 'a']);
})();


(function () {
	const list = new List(1, 2, 3);

	list
		.insert('a').after(1)
		.insert('b').after(42);

	assert.deepEqual(list, [1, 'a', 2, 3, 'b']);
})();


(function () {
	const list = new List(1, 2, 3);

	list
		.insert('a').before(1)
		.insert('c').after('a')
		.insert('b').before('c');

	assert.deepEqual(list, ['a', 'b', 'c', 1, 2, 3]);
})();
