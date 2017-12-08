const crawler = [
  "/crawler/movie_home", //电影爬取
  "/crawler/movie_page", //电影首页爬取
  "/crawler/movie_bili" //B站爬取
];

const movieApi = [
  "/movie_api/movies/", //单个电影
  "/movie_api/movies", //电影列表
  "/movie_api/page" //电影首页
];

const onlineApi = ["/online_api/onlines/", "/online_api/onlines"];

const oauth = ["/oauth/users/", "/oauth/users"];

const context = [].concat(crawler, movieApi, onlineApi, oauth);
module.exports = {
  context,
  options: {
    target: "http://192.168.2.116:8080/",
    changeOrigin: true
  }
};
