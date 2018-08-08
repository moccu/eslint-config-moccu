# eslint-config-moccu

[![Build Status](https://travis-ci.org/moccu/eslint-config-moccu.svg?branch=master)](https://travis-ci.org/moccu/eslint-config-moccu)

The eslint config we use at moccu

## Installation

```
$ npm install --save-dev eslint-config-moccu
```

## Usage

### Base

This is a customized ruleset based on the [eslint recommended](https://eslint.org/docs/rules/)
rules.

```js
{
	"extends": [
		"moccu"
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
		"moccu",
		"moccu/react"
	],
	"rules": {
		// Additional rules...
	}
}
```

## License

[MIT](./LICENSE)
