# eslint-config-moccu

[![Build](https://github.com/moccu/eslint-config-moccu/actions/workflows/build.yml/badge.svg)](https://github.com/moccu/eslint-config-moccu/actions)
[![npm](https://img.shields.io/npm/v/@moccu/eslint-config)](https://www.npmjs.com/package/@moccu/eslint-config)


The eslint config we use at Moccu

## Installation

```
$ npm install --save-dev @moccu/eslint-config
```

## Usage

```js
// eslint.config.js
const {defineConfig} = require('eslint/config');
const moccu = require('@moccu/eslint-config');

module.exports = defineConfig([
	moccu.configs['recommended'],
	{
		rules: {
			semi: ['warn', 'always']
		}
	}
]);
```

## License

[MIT](./LICENSE)
