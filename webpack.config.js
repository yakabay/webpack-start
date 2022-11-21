const path = require("path");

module.exports = {
    entry: "./src/start.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    }
}
