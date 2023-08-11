const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = (env, arg) => {
    const Env = env.mode
    const isProduction = arg.mode === 'production';
    return {

        mode: isProduction ? 'production' : 'development',
        /**
         * mode' option to 'development' or 'production'
         * production 打包会压缩代码
         * 开发用development  生产用production
         * 
         * */
        entry: path.resolve(__dirname, './src/index.js'),

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },

        plugins: [
            new HtmlWebpackPlugin({
                // 引入模板  路径
                template: path.resolve(__dirname, './src/index.html'),
                // 打包后存放的目录和文件名
                filename: 'index.html'
            }),
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env'
                                    ]
                                ],
                                plugins: [
                                    ['@babel/plugin-proposal-decorators', { 'legacy': true }]
                                ]
                            }
                        }

                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader'
                        },
                        'less-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [
                        // {
                        //     loader: 'file-loader',
                        //     options: {
                        //         name: '[name].[ext]',
                        //         outputPath: 'images'
                        //     }
                        // },
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 819200, // 小于800KB的图片将被转换为Base64编码
                                name: '[name].[ext]',
                                outputPath: 'images',
                            },
                        },
                    ]
                }
            ]

        },

        // 开发，报错暴露源码位置
        // devtool: 'inline-source-map',
        // 生产, 不暴露位置
        devtool: isProduction ? 'nosources-source-map' : 'inline-source-map',
        devServer: {
            port: 2144

        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    }
}
