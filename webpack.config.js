//const path = require('path')
const HtmlWebpackOPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'
console.log(devMode)

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    devServer : {
        port: 4000
    },

    plugins: [
        new HtmlWebpackOPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })        
    ],
    
}