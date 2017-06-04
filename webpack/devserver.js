const path = require("path");

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        //hot: true,
        //open: true
    }
};