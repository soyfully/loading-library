const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
    entry: './src/entry.ts',
    output: {
        filename: 'etribeLoader.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: '',
        libraryTarget: 'window'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/assets/example.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'etribeLoader.min.css',
            chunkFilename: '[id].[hash].css',
        }),
        /**
         * import, require 선언 없이 jquery 를 사용하기 위해 지정
         * [참고] https://webpack.js.org/plugins/provide-plugin/
         */
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    /* style-loader */ MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    /**
     * resolve.extensions 에 기술된 확장자들은 import 시 확장자없이 사용가능하다.
     * [참고] https://webpack.js.org/configuration/resolve/#resolveextensions
     */
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    /**
     * bundle 생성 시, jquery dependency 를 포함하지 않기위해 지정
     * [참고] https://webpack.js.org/configuration/externals/
     */
    externals: {
        jquery: 'jQuery'
    }
};