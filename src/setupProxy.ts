const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app: any) {
    console.log("asd");
    app.use(
        createProxyMiddleware('/ttb/api/ItemList.aspx', {
            target: 'http://www.aladin.co.kr',
            changeOrigin: true,
        }),
    );

    app.use(
        createProxyMiddleware('/test', {
            target: 'http://localhost:3000/login',
            changeOrigin: true,
        }),
    );
};