module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './electron/index.ts',
  module: {
    rules: require('./rules.webpack'),
  }
}