'use strict';

const
	assert = require('assert'),
	chalk = require('chalk'),
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
eslint.CLIEngine.getErrorResults(report.results).forEach((error) =>
	error.messages.forEach((message) =>
		console.error(
			chalk.red(message.message),
			chalk.white(`(${message.ruleId})`),
			chalk.white(`\n\t${error.filePath}:${message.line}:${message.column}`)
		)
	)
);

// Self test
assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
