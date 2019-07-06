/* eslint key-spacing: ['error', { beforeColon: false, afterColon: true }] */
const specifiedConfig = require('./specified-config');

module.exports = {
	extends: [
		'airbnb',
		'plugin:css-modules/recommended',
		'plugin:jest/recommended',
		'plugin:promise/recommended',
		'plugin:you-dont-need-lodash-underscore/all',
		'plugin:you-dont-need-momentjs/recommended',
		'plugin:unicorn/recommended',
	],
	...specifiedConfig,
};
