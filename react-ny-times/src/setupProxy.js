const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/svc/**",
    createProxyMiddleware({
      target: "https://api.nytimes.com",
      changeOrigin: true,
      secure: false,
    })
  );
  app.use(
    "/images/**",
    createProxyMiddleware({
      target: "https://static01.nyt.com",
      changeOrigin: true,
      secure: false,
    })
  );
  app.use(
    "/auth/**",
    createProxyMiddleware({
      target: "http://localhost:8000/",
      changeOrigin: true,
      secure: false,
    })
  );
};
