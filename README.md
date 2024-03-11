# os-locale-ex

> A CommonJS version of [os-locale](https://www.npmjs.com/package/os-locale)
> 
> **Remind**: If your `node version` >= 16, you'll don't need this anymore, 
> just set type="module" in your package.json to enable `esm support`

## Usage

``` js
const {osLocale, osLocaleSync} = require("os-locale-ex")

osLocale().then(_ => {
    console.log(_)
})

console.log(osLocaleSync())
```
