

module.exports = {
    context: [
        '/movie_api/page',
        '/movie_api/movie/',
        '/movie_api/list',
        '/crawler/movie_bili',
        '/oauth/login',
        '/oauth/logout',
        '/oauth/test'
    ],
    options: {
        target: "http://192.168.2.116:8080/",
        changeOrigin: true,
    }
};