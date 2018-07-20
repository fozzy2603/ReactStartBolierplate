const path = require("path");
const merge = require('webpack-merge');

const devServer = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extaractCSS = require('./webpack/css.extract.js');
const images = require('./webpack/images');
const babelJs = require('./webpack/js.babel');
const html = require('./webpack/html');

const commonConfig = merge([
    {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'js/bundle.js'
        },
        resolve:{
            extensions: ['.js', '.jsx'],
        }
    },
    html,
    images,
    babelJs
]);

module.exports = function(env, argv) {

    if(argv.mode === 'production'){
        return merge([
            commonConfig,
            extaractCSS
        ])
    }

    if(argv.mode === 'development'){
        return merge([
            commonConfig,
            sass,
            devServer
        ])
    }

};