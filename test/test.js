'use strict';

const
	assert = require('assert'),
	eslint = require('eslint'),
	conf = require('../'),
	files = ['**/*.js'],
	report = new eslint.CLIEngine({
		useEslintrc: false,
		envs: [
			'node',
			'es6'
		],
		rules: conf.rules
	}).executeOnFiles(files)
;

// Show error report
// eslint.CLIEngine.getErrorResults(report.results).forEach((error) => {
// 	console.log(error.messages);
// });

// Self test
assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
