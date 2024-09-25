// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://serpapi.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the '/api' prefix
      },
      timeout: 5000, // Set a timeout for the proxy
    })
  );
};
