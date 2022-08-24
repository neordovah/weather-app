module.exports = {
    entry: {
        main: './src/javascript/index.js',
      },
    mode: "development",
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    }
}