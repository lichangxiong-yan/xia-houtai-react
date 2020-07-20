const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/jd',
    createProxyMiddleware({
      target: 'http://localhost:9999',
      changeOrigin: true
    })
  );
};
