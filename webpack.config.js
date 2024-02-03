const path = require('path');
const Html = require('html-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    //entry: './src/main.js',
    entry: {
        main: './js/main.js'
    },
    output: {
        module: true,
        clean: true,
        filename: '[name].pack.[contenthash].js',
        path: path.resolve(__dirname, 'dist') 
    },
    plugins: [
        new Html({
            title: 'Kata 6-1-5', // не работает при template
            template: './index.html'
        })
    ],
    experiments: {
        outputModule: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'] // порядок справа налево
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                      },
                    },
                  ],
            },
        ]
    }
}