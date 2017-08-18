import { observable, action, computed,autorun } from "mobx";
// 菜单数据(mock)
const menus = [
  { name: "首页", href: "/home" },
  { name: "电影", href: "/movies" },
  { name: "电视剧", href: "/teleplays" },
  { name: "动画片", href: "/cartoons" },
  { name: "资讯", href: "/news" }
];

// 菜单栏 登录
const logins = [
  { name: "weixin", handle: 1 },
  { name: "QQ", handle: 2 },
  { name: "liuyan", handle: 3 }
];

// 赛选菜单栏
const navs = [
  { name: "全部", type: 3 },
  { name: "动作片", type: 1 },
  { name: "喜剧片", type: 1 },
  { name: "爱情片", type: 1 },
  { name: "科幻片", type: 1 },
  { name: "恐怖片", type: 1 },
  { name: "剧情片", type: 1 },
  { name: "战争片", type: 1 },
  { name: "国产剧", type: 2 },
  { name: "TVB剧", type: 2 },
  { name: "欧美剧", type: 2 },
  { name: "日本剧", type: 2 },
  { name: "韩国剧", type: 2 }
];

class App {
  // 菜单
  @observable menus;
  @observable logins;
  @observable navs;
  constructor() {
    this.menus = menus;
    this.logins = logins;
    this.navs = navs;
  }
  
}

const app = new App();
export default app;
