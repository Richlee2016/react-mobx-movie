import { observable, action, runInAction } from "mobx";
import { log_in,log_out } from "@/servers/server";
class App {
  @observable user;
  constructor() {
    this.user = null;
  }


  //保持会话
  Login = async hash => {
    const reg = /#/;
    const openid = hash?hash.replace(reg, ""):"no";
    const res = await log_in(openid);
    runInAction(() => {
      const { data: { code, data } } = res;
      if (code === 1) {
        this.user = data;
      } else {
        this.user = null;
      }
    });
  };

  LogOut = async () =>{
    const res = await log_out();
    runInAction(() => {
      const { data: { code, data } } = res;
      if (code === 1) {
        this.user = null;
      };
    });
  } 
}

const app = new App();
export default app;
