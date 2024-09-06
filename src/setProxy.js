const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/memeber/idcheck', {
            target: 'https://localhost:8080/',
            changeOrigin: true,
        })
    );
};