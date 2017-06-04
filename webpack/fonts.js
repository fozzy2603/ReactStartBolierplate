module.exports = {
    module: {
        loaders: [
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader&name=fonts/[name].[ext]' }
        ]
    }
};