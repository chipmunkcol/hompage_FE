// const proxy = require("http-proxy-middleware");

// module.exports = (app) => {
//   app.use(
//     proxy("/api", {
//       //도메인 api로 호출
//       target: process.env.REACT_APP_SERVER_PATH, //통신할 서버의 도메인주소
//       changeOrigin: true,
//     })
//   );
// };

// BE에서 CORS 해결되는데? 뭐지 FE에서 proxy 안해도 되는건가?

```
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });
```;
