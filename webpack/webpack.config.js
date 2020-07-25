const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {buildPath, srcPath, nodeModulePath, mediaPath} = require('./path');
const loadEnvVariables = require("./webpack.env.config");


const config = {
    mode: process.env.APP_MODE,
    context: srcPath,
    entry: {
        client: "../src/client"
    },
    output: {
        path: buildPath,
        filename: "assets/js/[name].bundle.[contenthash].js",
        publicPath: "/"
    },
    devtool: process.env.APP_MODE !== "production" ? "inline-source-map" : undefined,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.(scss|css)$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            sourceMap: process.env.APP_MODE !== 'production'
                        },
                    },
                  
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("node-sass"),
                            sourceMap: process.env.APP_MODE !== 'production',
                        },
                    }
                ]
            },
            {   test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
    },
    resolve: {
        modules: [
            nodeModulePath
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build']
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: mediaPath, to: './media' }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/style/[name].styles.[contenthash].css',
            ignoreOrder: false,
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: "assets/index.html",
            cache: true,
            inject: false,
            scriptLoading: 'defer',
            minify: process.env.APP_MODE ==="production",
            title: 'Home Title',
            template: 'index.html'
        })
    ],
    optimization: {
        runtimeChunk: {
            name: "client.runtime"
        },
        moduleIds: 'hashed',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "client.vendors"
                },
            },
        }
    }
};

module.exports = (env) => {
    let envPlugin = loadEnvVariables();
    config.plugins.push(envPlugin);
    return config;
}