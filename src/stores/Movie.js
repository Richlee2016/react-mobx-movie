import { observable, action, computed, runInAction } from "mobx";
import { Movie_Page,Movie_Detail, get_movie_bili } from "@/servers/server";
class Movie {
  @observable index;
  @observable movie;
  @observable bili;
  constructor() {
    this.index = [];
    this.movie = {};
    this.bili = [];
  }

  //获取首页
  async getPageData() {
    if(this.index.length === 0){
      const home = await Movie_Page();
      const {data:{page:{list}}} = home;
      console.log(home);
      runInAction(() => {
        this.index = list;
      })
    };
  }

  //获取列表页
  getMovieData = async id => {
    const m = await Movie_Detail(id);
    const { data: { movie} } = m;
      // const bili = await get_movie_bili({search:data.name});
      // const biliCode = bili.data.code;
      runInAction(() => {
        this.movie = movie;
        this.bili = bili.data.data;
      });
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
