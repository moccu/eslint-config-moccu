'use strict';

const
	assert = require('assert'),
	chalk = require('chalk'),
	deepmerge = require('deepmerge'),
	eslint = require('eslint'),
	files = ['**/*.js'],
	config = ['index', 'react', 'react-proptypes'].reduce(
		(cfg, name) => deepmerge(cfg, require('../' + name)),
		{
			useEslintrc: false,
			envs: ['node', 'es6']
		}),
	report = new eslint.CLIEngine(config).executeOnFiles(files);
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
