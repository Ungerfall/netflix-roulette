const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.ts',

    module: {
    rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },

    output: {
        filename: 'bundle.ts',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    watch: false
}
