const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'none',
  resolve: {
    alias: {
      '@':  path.resolve(__dirname, 'src/')
    }
  }
}
