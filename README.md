<h4 align="center">A Style You Might Like</h4>

[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/hanakin/sane/master.svg
[travis-url]: https://travis-ci.org/hanakin/sane
[npm-image]: https://img.shields.io/npm/v/sane.svg
[npm-url]: https://npmjs.org/package/sane
[downloads-image]: https://img.shields.io/npm/dm/sane.svg
[downloads-url]: https://npmjs.org/package/sane

[Standard](https://github.com/feross/standard) customised to make [me](#maintainers) sane.

This is a fork of Standard with two changes:

- **4 Space Soft Tabs** for indentions
- **Semicolons** always

It is called sane, because I hope that it brings you sanity the same as it does for me.

If the information you are looking for is not in this readme, you should take a look at the [Standard readme](https://github.com/feross/standard), it might have what you are looking for.

## Install

```bash
$ npm install sane
```

## Usage

The easiest way to use JavaScript Happiness Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `sane` globally on your system, omit it if you want
to install in the current working directory):

```bash
$ npm install sane -g
```

After you've done that you should be able to use the `sane` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```bash
$ sane
Error: Use JavaScript sane Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

You can optionally pass in a directory (or directories) using the glob pattern. Be sure to quote paths containing glob patterns so that they are expanded by standard instead of your shell:

```bash
$ sane "src/util/**/*.js" "test/**/*.js"
```

Many people like to add happiness to their testing setup. To do this, save the packge as a dev dependency and add happiness to your package.json's test script:

```bash
$ npm install --save-dev sane
```

```json
{
  "scripts": {
    "test": "sane && mocha # <- or whatever test runner you use"
  }
}
```

**Note:** by default `sane` will look for all files matching the patterns: `**/*.js`, `**/*.jsx`.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-sane-style](https://cdn.rawgit.com/hanakin/sane/master/badge.svg)](https://github.com/hanakin/sane)

```markdown
[![js-sane-style](https://cdn.rawgit.com/hanakin/sane/master/badge.svg)](https://github.com/hanakin/sane)
```

[![js-sane-style](https://img.shields.io/badge/code%20style-sane-brightgreen.svg)](https://github.com/hanakin/sane)

```markdown
[![js-sane-style](https://img.shields.io/badge/code%20style-sane-brightgreen.svg)](https://github.com/hanakin/sane)
```

### Text editor plugins

**Coming Soon**

## Maintainers

- [Mike Miday](https://www.github.com/hanakin)

### I want to contribute to `sane`. What packages should I know about?

- **[sane](https://github.com/hanakin/sane)** - this repo
  - **[standard-engine](https://github.com/flet/standard-engine)** - cli engine for arbitrary eslint rules
  - **[eslint-config-happiness](https://github.com/wesleytodd/eslint-config-happiness)** - eslint rules for happiness
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - custom eslint rules for standard (not part of eslint core)
  - **[eslint](https://github.com/eslint/eslint)** - the linter that powers happiness
- **[sane-format](https://github.com/hanakin/sane-format)** automatic code formatter
- **[snazzy](https://github.com/feross/snazzy)** - pretty terminal output for happiness

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
