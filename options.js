var eslint = require('eslint');
var path = require('path');
var pkg = require('./package.json');

module.exports = {
	bugs: pkg.bugs.url,
	cmd: 'sane',
	eslint: eslint,
	eslintConfig: {
		configFile: path.join(__dirname, 'eslintrc.json')
	},
	formatter: 'Formatting is no longer included with standard. Install it separately: "npm install -g sane-format"',
	homepage: pkg.homepage,
	tagline: 'Use JavaScript Sane Style',
	version: pkg.version
};
