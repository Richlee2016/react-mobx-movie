import rxios from "./rxios";

// 获取页面
export const Get_Hot = () => rxios("get", "/api/hot/HotMovies");

