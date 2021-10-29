'use strict';

(async function() {
	const
		assert = require('assert'),
		chalk = require('chalk'),
		deepmerge = require('deepmerge'),
		{ESLint} = require('eslint'),
		files = ['**/*.js'],
		eslint = new ESLint({
			useEslintrc: false,
			overrideConfig: {
				env: {
					'es6': true,
					'node': true
				},
				parserOptions: {
					'ecmaVersion': 9
				},
				...['index', 'react', 'react-proptypes'].reduce(
					(cfg, name) => deepmerge(cfg, require('../' + name))
				)
			}
		}),
		results = await eslint.lintFiles(files)
	;

	let
		errorCount = 0,
		warningCount = 0
	;

	// Show error report
	ESLint.getErrorResults(results).forEach((error) => {
		errorCount += error.errorCount;
		warningCount += error.warningCount;
		error.messages.forEach((message) =>
			console.error(
				chalk.red(message.message),
				chalk.white(`(${message.ruleId})`),
				chalk.white(`\n\t${error.filePath}:${message.line}:${message.column}`)
			)
		)
	});

	// Self test
	assert.equal(errorCount, 0);
	assert.equal(warningCount, 0);
})().catch((error) => {
	process.exitCode = 1;
	console.error(error);
});
