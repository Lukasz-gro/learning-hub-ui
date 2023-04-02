const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/*',
    createProxyMiddleware({
      target: 'http://13.48.78.45:7788/',
      changeOrigin: true,
    })
  );
};
