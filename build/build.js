/*
* @Author: lion1ou
* @Date:   2017-11-16 20:10:38
* @Last Modified by:   lion1ou
* @Last Modified time: 2017-11-17 18:16:06
*/
const path = require('path')
const fs = require('fs')
const ora = require('ora')  // 命令行环境的 loading效果
const rm = require('rimraf') // 用于统一rm
const copy = require('copy')
const chalk = require('chalk') // 打印提示语
const webpack = require('webpack')

const config = require('./webpack.conf')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

new Promise((resolve, reject) => {
    // 构建全量压缩包
    let building = ora('building...')
    building.start()
    rm(path.resolve(rootPath, 'min', `${pkg.name}.min.js`), err => {
        if (err) throw (err)
        webpack(config, function (err, stats) {
            if (err) throw (err)
            building.stop()
            process.stdout.write(stats.toString({
                colors: true,
                modules: true,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')
            resolve()
            console.log(chalk.cyan('  Build complete.\n'))
        })
    })
}).then(() => {
    // 替换模块文件
    let copying = ora('copying...')
    copying.start()
    rm('*.js', err => {
        if (err) throw (err)
        let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
        folderList.forEach((item, index) => {
            copy(`src/${item}/*.js`, rootPath + '/dist', function (err, files) {
                if (err) throw err;
                if (index === folderList.length - 1) {
                    copying.stop()
                    console.log(chalk.cyan('  Copy complete.\n'))
                }
            })
        })
    })
}).catch((err) => {
    throw err
})
