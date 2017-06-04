module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=images/',
                    'image-webpack-loader'
                ]
            }
        ]
    }
};