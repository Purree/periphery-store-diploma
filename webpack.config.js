const path = require('path')

// File only for IDE hints
module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '@': path.join(__dirname, 'resources/js'),
            '@@': path.join(__dirname, 'resources/sass'),
            '~': path.join(__dirname, 'node_modules')
        }
    }
}
