import { observable, action, computed, runInAction } from "mobx";
import {Hot_Movie} from "@/servers/server"
class Home {
  @observable hotMovie;
  constructor() {
    this.hotMovie = []
  }

  //获取首页
  GetHotMovie = async () => {
    const res = await Hot_Movie();
    runInAction(() => {
      this.hotMovie = res.data.movies;
    });
  }
}

const home = new Home();
export default home;
