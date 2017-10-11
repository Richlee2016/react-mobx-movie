import { observable, action, computed,runInAction } from "mobx";
import {get_movie_page} from "@/servers/server";
class Home {
  @observable data;
  constructor() {
    this.data = [];
  }

  //获取首页
  async getPageData() {
    if(this.data.length === 0){
      const home = await get_movie_page();
      const {data:{code,data:{list}}} = home;
      if(code === 1){
        runInAction(() => {
          this.data = list;
        })
      };
    };
  }

}

const home = new Home();
export default home;
