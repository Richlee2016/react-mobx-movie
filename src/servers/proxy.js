

module.exports = {
    context: [
        '/api/v0/movies/home'
    ],
    options: {
        target: "http://192.168.2.116:3006/",
        changeOrigin: true,
    }
};