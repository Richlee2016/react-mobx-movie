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
    let { data } = await rxiosHome();
    let res = splarr(data);
    const result = {
      newest:res(14),
      movie:cutarr(res(90),10,9),
      teleplay:cutarr(res(70),10,7),
      cartoon:cutarr(res(40),10,4)
    }
    runInAction(() => {
      this.data = result;
    })
  }

}

const home = new Home();
export default home;
