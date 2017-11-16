<div align=center>

# sdq

📦  Utility functions to validate cédula and RNC!

## Work in progress

</div>

## Features

  - Validate Cédula de Identidad Electoral.
  - Validate RNC (Registro Nacional del Contribuyente).
  - Only 1.98KB (1.03 gzipped)!

## Installation

```shell
yarn add sdq
```

or

```shell
npm install sdq --save
```

## Usage

```js
import sdq from 'sdq'

sdq.isCedula('xxx-yyyyyyy-z')  // Returns true/false.
sdq.isRnc('aaa-bbbbb-c')       // Returns true/false.
```

## Development

  1. Clone and fork this repo.
  2. Install dependencies: `yarn` or `npm install`.
  3. [Run tests](#tests).
  4. Prepare a pull request.

### Test

  - `yarn test` — to run all tests.
  - `yarn test -- --watch` — to run all tests in watch mode.

### Publish

  1. Bump package version: `yarn version --new-version x.x.x -m 'Version %s.'`.
  2. Publish to NPM registry: `npm publish`.
  3. Push new tag: `git push origin --tags`.

---

<div align=center>

Made with :heart: by [all contributors](https://github.com/rmariuzzo/react-input-handler/graphs/contributors).

[MIT license](LICENSE)

</div>
