# os-locale-ex

> A CommonJS version of [os-locale](https://www.npmjs.com/package/os-locale)

## Usage

``` js
const {osLocale, osLocaleSync} = require("os-locale-ex")

osLocale().then(_ => {
    console.log(_)
})

console.log(osLocaleSync())
```
