import rxios from "./rxios";

// 获取页面
export const Get_Oline_Page = qs => rxios("POST", "/api/onlines/Page",qs);
// 获取电影
export const Get_Oline_Vod = id => rxios("GET", `/api/onlines/Movie/${id}`);
