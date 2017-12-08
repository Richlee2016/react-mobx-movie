import rxios from './rxios'

const get_movie_page = id => rxios('GET', `/movie_api/page`);
const get_movie_list = qs => rxios('GET', '/movie_api/movies',qs);
const get_movie_home = id => rxios('GET', `/movie_api/movies/${id}`);
const get_movie_bili = qs => rxios('GET', '/crawler/movie_bili',qs);
const log_in = qs => rxios("GET",`/oauth/users/${qs}`);
const log_out = () => rxios("DEL", "/oauth/users");
export {
    get_movie_page, // 首页
    get_movie_list, // 列表
    get_movie_home, // 详情
    get_movie_bili, // bilibili
    log_in,//登录
    log_out,//登出
}