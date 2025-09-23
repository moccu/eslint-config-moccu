(async function() {
	const
		assert = require('assert'),
		{ESLint} = require('eslint'),
		files = ['**/*.js'],
		// configs = ['index', 'react', 'react-proptypes']
		configs = ['index']
	;

	let
		errorCount = 0,
		warningCount = 0
	;

	await Promise.all(configs.map(async (name) => {
			const
				plugin = require(`../${name}.js`),
				eslint = new ESLint({
					overrideConfigFile: true,
					overrideConfig: plugin.configs['flat/recommended']
				}),
				results = await eslint.lintFiles(files)
			;

		// Show error report
		ESLint.getErrorResults(results).forEach((error) => {
			errorCount += error.errorCount;
			warningCount += error.warningCount;
			error.messages.length && console.log('\n', error.filePath);
			error.messages.forEach((message) => console.log(`${message.line}:${message.column}`, message.message, message.ruleId));
			error.messages.length && console.log(`\n${error.errorCount} errors, ${error.warningCount} warnings\n`);
		});
	}));

	// Self test
	assert.equal(errorCount, 0);
	assert.equal(warningCount, 0);
})().catch((error) => {
	process.exitCode = 1;
	console.error(error);
});
