const path = require("path");

console.log(__dirname)

module.exports = {
    entry: "./src/start.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }]
    },
    mode: "production",
    devtool: "source-map"
}
