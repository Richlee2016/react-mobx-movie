import { observable, action, computed, runInAction } from "mobx";
import { get_movie_home, get_movie_bili } from "@/servers/server";
class Movie {
  @observable movie;
  @observable bili;
  constructor() {
    this.movie = {};
    this.bili = [];
  }

  //获取列表页
  getMovieData = async id => {
    const movie = await get_movie_home(id);
    const { data: { code, data } } = movie;
    if (code === 1) {
      const bili = await get_movie_bili({search:data.name});
      const biliCode = bili.data.code;
      if (biliCode === 1) {
        runInAction(() => {
          this.movie = data;
          this.bili = bili.data.data;
        });
      }
    }
  };
  
  // 获取bilibili
  getBiliData = async id => {
    const bili = await get_movie_bili(id);
    const { data: { code, data } } = bili;
    if (code === 1) {
      runInAction(() => {
        this.bili = data;
      });
    }
  };
}

const movie = new Movie();
export default movie;
