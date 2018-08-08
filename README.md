# eslint-config-moccu

[![Build Status](https://travis-ci.org/moccu/eslint-config-moccu.svg?branch=master)](https://travis-ci.org/moccu/eslint-config-moccu)

The eslint config we use at moccu

## Installation

```
$ npm install --save-dev @moccu/eslint-config
```

## Usage

### Base

This is a customized ruleset based on the [eslint recommended](https://eslint.org/docs/rules/)
rules.

```js
{
	"extends": [
		"@moccu/eslint-config"
	],
	"rules": {
		// Additional rules...
	}
}
```

### React

This is a customized ruleset based on the [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
rules.

```js
{
	"extends": [
		"@moccu/eslint-config",
		"@moccu/eslint-config/react"
	],
	"rules": {
		// Additional rules...
	}
}
```

## License

[MIT](./LICENSE)
