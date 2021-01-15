const { createProxyMiddleware } = require("http-proxy-middleware");
// const filter = function (pathname, req) {
//   return pathname.match("^/svc");
// };
// var restream = function (proxyReq, req, res, options) {
//   if (req.body) {
//     let bodyData = JSON.stringify(req.body);
//     // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
//     proxyReq.setHeader("Content-Type", "application/json");
//     proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
//     // stream the content
//     proxyReq.write(bodyData);
//   }
// };

module.exports = function (app) {
  // app.use(
  //   "**",
  //   createProxyMiddleware(filter, {
  //     target: "https://api.nytimes.com",
  //     //   headers: {
  //     //     Connection: "keep-alive",
  //     //   },
  //     onProxyReq: restream,
  //     changeOrigin: true,
  //     secure: false,
  //   })
  // );
  //   app.listen(3000);

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
