const path = require('path');
module.exports = {
    entry: './src/tennis/main.js',
    output: {
        path: path.resolve(__dirname, 'public/tennis'),
        filename: 'main.js',
    }
};