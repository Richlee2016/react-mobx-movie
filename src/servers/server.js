import rxios from "./rxios";

const get_movie_list = qs => rxios("GET", "/movie_api/movies", qs);
const get_movie_bili = qs => rxios("GET", "/crawler/movie_bili", qs);
const log_in = qs => rxios("GET", `/oauth/users/${qs}`);
const log_out = () => rxios("DEL", "/oauth/users");

export const Movie_Detail = id => rxios("GET", `/api/movies/Movies/${id}`);
export const Movie_Page = () => rxios("GET", `/api/movies/MoviePage`);
export const Session_Login = qs => rxios("GET", "/api/session/Session", qs);
export const Session_Logout = () => rxios("POST", "/api/session/DeleteSession");
export const Hot_Movie = () => rxios("GET", "/api/movies/HotMovies");

// 列表
// bilibili
//登录
//登出
export { get_movie_list, get_movie_bili, log_in, log_out };
