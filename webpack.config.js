const path = require("path")
const webpack = require("webpack")

module.exports = env => {
    return {
        entry: {
            app: "./src/index.js",
            vendor: ["phaser"]
        },
        output: {
            filename: "[name].bundle.js",
            path: path.join(__dirname, 'dist'),
            // publicPath: path.join(__dirname, 'dist') //TODO: move this to ./images/ add change where images are packed to.
        },
        mode: env && env.production ? "production" : "development",
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ["file-loader"]
                },
                {
                    test: [/\.vert$/, /\.frag$/],
                    use: "raw-loader"
                }
            ]
        },
        devServer: {
            contentBase: "./"
        },
        plugins: [
            new webpack.DefinePlugin({
                CANVAS_RENDERER: JSON.stringify(true),
                WEBGL_RENDERER: JSON.stringify(true)
            })
        ],
        optimization: {
            runtimeChunk: false,
            splitChunks: {
                cacheGroups: {
                    default: false,
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "all",
                        minChunks: 2
                    }
                }
            }
        }
    }
}