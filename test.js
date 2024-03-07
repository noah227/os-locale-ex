const {osLocale, osLocaleSync} = require("./dist/index")

osLocale().then(_ => {
    console.log(_)
})

console.log(osLocaleSync())
