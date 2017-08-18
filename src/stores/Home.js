import { observable, action, computed,runInAction } from "mobx";
import { home as rxiosHome } from "@/servers/server";
import {splarr,cutarr} from '../utils'
class Home {
  @observable data;
  constructor() {
    this.data = [];
  }

  // 获取数据
  async getData() {
    // 如果存在不再请求
    if(this.data.length===0){
      let { data } = await rxiosHome();
      runInAction(() => {
          this.data = data;
      })
    };
  }

}

const home = new Home();
export default home;
