# eslint-config-moccu

![Build](https://github.com/moccu/eslint-config-moccu/workflows/Build/badge.svg)


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
Separately there is a ruleset for proptypes-validation in `@moccu/eslint-config/react-proptypes`.

```js
{
	"extends": [
		"@moccu/eslint-config",
		"@moccu/eslint-config/react",
		"@moccu/eslint-config/react-proptypes"
	],
	"rules": {
		// Additional rules...
	}
}
```

## Contribute

* Add / Edit rules after agreements with developers at Moccu
* Run tests using  `npm test`
* Set new version in [package.json](https://github.com/moccu/eslint-config-moccu/blob/master/package.json)
* Publish new version on npm using `npm publish --access=public`
* Add github release and tag including release notes

## License

[MIT](./LICENSE)
