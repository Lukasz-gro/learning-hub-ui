const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/*',
    createProxyMiddleware({
      target: 'https://learning-hub-server-production.up.railway.app',
      changeOrigin: true,
    })
  );
};