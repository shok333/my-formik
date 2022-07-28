var path = require('path');
// var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = ({ development }) => ({
    entry: {
        index: './app/index.tsx'
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index.js',
        library: 'my-formik',
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'typeof self === \'undefined\' ? this : self',
    },
    devtool: development ? 'inline-source-map' : false,
    mode: development ? 'development' : 'production',
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.json']
    },
    module : {
        rules : [
            {
                test: /\.(ts|js|jsx|tsx)$/,
                use: [
                    'ts-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/preset-react",
                                "@babel/preset-typescript",
                                [
                                    "@babel/preset-env"
                                ]                            ]
                        }
                    },
                ]
            },
            // {
            //   test: /\.ts$/,
            //   exclude: /node_modules/,
            //   use: ['babel-loader', 'ts-loader'],
            // },
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            }
        ]
    },
    externals: [
        // nodeExternals(),
        {
          react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
          },
          'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
          }
        }
    ]
    // mode:'development',
    // plugins : [
    //     new HtmlWebpackPlugin ({
    //         template : 'app/index.html'
    //     })
    // ]

});