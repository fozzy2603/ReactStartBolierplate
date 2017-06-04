const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                    publicPath: '../'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/app.css',
            disable: false,
            allChunks: true
        })
    ]
};