const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {     
                     //       presets: ["@babel/preset-env"],
                        },
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        library: "word-to-emoji",
        libraryTarget: "umd",
        globalObject: "this",
        umdNamedDefine: true,
    },
    plugins: [
        new CleanWebpackPlugin({
          cleanStaleWebpackAssets: false,
          cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "./dist")],
        }),
    ]
}