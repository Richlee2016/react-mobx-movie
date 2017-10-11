

module.exports = {
    context: [
        '/movie_api/page',
        '/movie_api/movie/',
        '/movie_api/list',
        '/crawler/movie_bili'
    ],
    options: {
        target: "http://localhost:3006/",
        changeOrigin: true,
    }
};