import { observable, action, runInAction } from "mobx";
import { get_user_info } from "@/servers/server";
class App {
  @observable user;
  constructor() {
    this.user = null;
  }

  //获取首页
  Login = async hash => {
    const reg = /#/;
    const openid = hash.replace(reg, "");
    const res = await get_user_info({ openid });
    runInAction(() => {
      const { data: { code, data } } = res;
      if (code === 1) {
        this.user = data;
      } else {
        this.user = null;
      }
    });
  };
}

const app = new App();
export default app;
