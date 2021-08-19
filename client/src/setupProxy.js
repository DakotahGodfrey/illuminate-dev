const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/api/current-user', '/auth'],
    createProxyMiddleware({
      target: 'http://localhost:5000/',
      // changeOrigin: true,
    })
  );
};
