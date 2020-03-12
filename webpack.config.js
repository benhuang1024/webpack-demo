const path = require('path');

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
                include: [
                    path.resolve(__dirname, "app"),
                ],
                exclude: [
                    path.resolve(__dirname, "../wordpress"),
                ]
            }
        ]
    },
    devtool: 'source-map',// 输出 Source Map 方便在浏览器里调试 TypeScript 代码
};