const { createProxyMiddleware } = require('http-proxy-middleware');
const apiUrl = process.env.REACT_APP_SEARCH_API;

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: `${apiUrl}`,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
