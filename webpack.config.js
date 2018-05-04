const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
    mode: 'development',
    entry: [
        SRC_DIR + "/js/app.js",
        SRC_DIR + "/scss/app.scss",
    ],
    
    output: {
        path: DIST_DIR + '/js',
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                exclude: '/node-modules',
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                include: SRC_DIR,
                loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/app.css', {
            allChunks: true
        })
    ],
    devServer: {
        contentBase: './'
    },
    devtool: 'inline-source-map'
};
