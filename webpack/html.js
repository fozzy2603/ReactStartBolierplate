const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html'
        })
    ]
};