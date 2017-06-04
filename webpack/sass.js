module.exports = {
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            }
        ]
    }
};