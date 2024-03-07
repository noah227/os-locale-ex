const {nodeResolve} = require("@rollup/plugin-node-resolve")
const commonjs = require("@rollup/plugin-commonjs")
const typescript = require("@rollup/plugin-typescript")
const pluginJson = require("@rollup/plugin-json")
const terser = require("@rollup/plugin-terser")

const plugins = [
    nodeResolve(),
    typescript(),
    commonjs(),
    pluginJson(),
    terser()
]

// 打包后就可以舍弃node_modules了
module.exports = [
    {
        input: "./index.ts",
        output: {
            file: "./dist/index.js",
            format: "cjs",
            exports: "auto",
            sourcemap: true
        },
        plugins: [
            ...plugins
        ]
    }
]
