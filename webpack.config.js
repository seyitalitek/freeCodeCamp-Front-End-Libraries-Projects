const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.jsx',
    },

    devServer: {
        contentBase: './doc',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            title: 'Random Quote Machine',
            template: './src/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'doc'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            include: path.resolve(__dirname, 'src'),
            type: 'asset/resource'
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            include: path.resolve(__dirname, 'src'),
            type: 'asset/resource'
        }, {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            use: 'babel-loader'
        }]
    }
};