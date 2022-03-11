const { createProxyMiddleware } = require('http-proxy-middleware');
const { REACT_APP_SEARCH_API } = process.env;

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: REACT_APP_SEARCH_API,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
