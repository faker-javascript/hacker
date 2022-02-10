<h1 align="center">Hacker</h1>
<p align="center">Hacker package provides functionality to generate a fake hacker value.</p>

<p align="center">
<a href="https://github.com/faker-javascript/hacker/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/hacker.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@fakerjs/hacker"> <img alt="node-current" src="https://img.shields.io/node/v/@fakerjs/hacker"> <a href="https://github.com/faker-javascript/hacker/actions/workflows/ci.yml"><img src="https://github.com/faker-javascript/hacker/actions/workflows/ci.yml/badge.svg"></a> <a href="https://github.com/faker-javascript/hacker"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a>
</p>

## Install

npm
```
npm install @fakerjs/hacker --save-dev
```

yarn
```
yarn add @fakerjs/hacker -D
```

## Usage

```js
import hacker from '@fakerjs/hacker';

hacker({locale: 'en_US'}).noun();
//=> port 
// Allowed locale: en_US

hacker().noun();
//=> port

hacker().verb();
//=> index

hacker().ingverb();
//=> parsing

hacker().adjective();
//=> virtual

hacker().abbreviation();
//=> RAM
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/hacker/blob/master/LICENSE)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
