## @magic-modules/module-list
this is the [@magic-modules](https://github.com/magic-modules)
ModuleList component.
It provides a list with descriptions and links for all @magic-modules.

[html docs](https://magic.github.io/magic-modules/module-list)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/module-list.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/module-list
[travis-image]: https://api.travis-ci.org/magic-modules/module-list.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/module-list
[appveyor-image]: https://img.shields.io/appveyor/ci/jaeh/module-list/master.svg
[appveyor-url]: https://ci.appveyor.com/project/jaeh/core/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/module-list/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/module-list
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/module-list.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/module-list.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/module-list/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/module-list

#### install:
```bash
npm install --save-exact @magic-modules/module-list
```

#### usage:

##### import:
```javascript
// assets/index.js:


module.exports = {
  //... other entries
  ModuleList = require('@magic-modules/module-list'),
}
```

##### use tag
```javascript
// in any component view
const component = {
  View: () => div([ModuleList]),
}
```

thats it.
