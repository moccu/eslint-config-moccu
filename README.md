# eslint-config-moccu

[![Build](https://github.com/moccu/eslint-config-moccu/actions/workflows/build.yml/badge.svg)](https://github.com/moccu/eslint-config-moccu/actions)


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
	moccu.configs['flat/recommended'],
	{
		rules: {
			semi: ['warn', 'always']
		}
	}
]);
```

## License

[MIT](./LICENSE)
