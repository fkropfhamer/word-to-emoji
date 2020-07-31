const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {     
                     //       presets: ["@babel/preset-env"],
                        },
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