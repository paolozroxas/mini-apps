module.exports = {
  entry: "./client/app.jsx",
  output: {
    filename: "./client_dist/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  devtool: "source-map"
}
