/*
* @Author: lion1ou
* @Date:   2017-11-16 20:11:11
* @Last Modified by:   lion1ou
* @Last Modified time: 2017-11-17 18:17:27
*/
const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 压缩代码


const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve(rootPath, 'min'),
        library: `${pkg.name}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
}

module.exports = config
