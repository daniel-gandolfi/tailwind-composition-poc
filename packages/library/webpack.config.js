const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "main.js",
      library: {
        type: "module"
      },
      module:true
    },
    module: {
        rules: [
            {
               test: /\.tsx?$/,
               exclude: /node_modules/,
               loader: 'ts-loader'
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
                
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
              { from: "tailwind.config.js", to: "tailwind.config.js" },
            ]
        })
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    experiments: {
        outputModule:true
    }
}