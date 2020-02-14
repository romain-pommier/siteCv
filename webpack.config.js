const webpack = require("webpack");
const path = require("path");

let js = {
    entry: ["./src/JS/main.js", "./src/JS/particles.js","./src/JS/app.js"],
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    }
}




module.exports = js;