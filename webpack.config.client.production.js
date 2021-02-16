const path = require('path')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png|webm|mp4)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            // {
            //     test: /\.(mp4|webm)$/,
            //     use: {
            //         loader: 'file-loader',
            //     }
            // }
        ]
    }
}

module.exports = config
