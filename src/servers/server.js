import rxios from './rxios'

const get_movie_page = id => rxios('GET', `/movie_api/page`);
const get_movie_list = qs => rxios('GET', '/movie_api/list',qs);
const get_movie_home = id => rxios('GET', `/movie_api/movie/${id}`);
const get_movie_bili = qs => rxios('GET', '/crawler/movie_bili',qs);
const get_user_info = qs => rxios('GET', '/oauth/login',qs);
export {
    get_movie_page, // 首页
    get_movie_list, // 列表
    get_movie_home, // 详情
    get_movie_bili, // bilibili
    get_user_info,//登录
}