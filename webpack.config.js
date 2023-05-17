/**
 * @type import('webpack').Configuration
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/main.tsx",
    output: {
        path: path.resolve(__dirname,"docs/"),
        filename: "[name].js",
        clean: true
        
    },
    module: {
        rules: [{
            test: /\.ts[x]?$/, use: "ts-loader"
        }]
    },
    target: "web",
    resolve: {
        extensions: [".ts",".js",".tsx",".jsx",".json"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            publicPath: "./"
        }),
        new CopyWebpackPlugin({
            patterns:[
                {from:"public",to:"public",globOptions:{
                    ignore: ["**/index.html"]
                }}
            ]
        }),
    ],
    devServer: {
        historyApiFallback: true,
        
    },
    watch: true
}