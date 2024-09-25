const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "http": require.resolve("http-browserify"),
    "https": require.resolve("https-browserify"),
    "stream": require.resolve("stream-browserify"),
  };

  return config;
};