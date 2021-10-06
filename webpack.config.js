const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require("./package.json").dependencies;
const path = require("path");

module.exports = env => ({
    target:"web",
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath:"/"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]']
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                'Mfe1':'remoteApp1@http://localhost:5200/remoteEntry.js'
            },
            shared: {
                'react': {
                    requiredVersion: `${dependencies['react']}`
                },
                'react-dom': {
                    requiredVersion: `${dependencies['react-dom']}`
                },
                'react-router-dom': {
                    requiredVersion: dependencies['react-router-dom']
                },
                '@chenlevin89/awesome-lib': {
                    requiredVersion: dependencies['@chenlevin89/awesome-lib']
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
    ],
    devServer: {
        port: 5100,
        historyApiFallback: true
    }
})