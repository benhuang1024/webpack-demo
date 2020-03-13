const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // 执行入口文件
    entry: './app/main',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        // 先尝试 ts 后缀的 TypeScript 源码文件
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
            }, {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // 转换 .css 文件需要使用的 Loader
                    use: ['css-loader'],
                }),
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
        ]
    },
    devtool: 'source-map',// 输出 Source Map 方便在浏览器里调试 TypeScript 代码
    plugins: [
        new ExtractTextPlugin({
            // 从 .js 文件中提取出来的 .css 文件的名称
            filename: `[name]_[md5:contenthash:hex:8].css`,
        }),
        new VueLoaderPlugin()
    ]
};