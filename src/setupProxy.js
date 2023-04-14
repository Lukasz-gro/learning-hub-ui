const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/*',
    createProxyMiddleware({
      target: 'http://16.16.104.160',
      changeOrigin: true,
    })
  );
};
