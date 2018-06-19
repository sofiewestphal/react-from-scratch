const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "index_bundle.js",
    },

    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}