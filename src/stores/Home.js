import {observable, action, computed, runInAction} from "mobx";
import {Get_Hot} from "@/servers/movie";
class Home {
  /**observable------------------------------------------------------ */
  @observable hotlist = []; //推荐列表
  @observable hotnow = 0; //播放 索引
  /**computed------------------------------------------------------ */
  // 正在播放
  @computed get hotplay() {
    return this.hotlist[this.hotnow] || null;
  }
  /**action------------------------------------------------------ */
  @action //获取推荐列表
  async get_hot() {
    const res = await Get_Hot();
    runInAction(() => {
      this.hotlist = res.data.movies.list;
    })
  }

  @action //操作正在播放
  set_play({type, num}) {
    if (num) {
      this.hotnow = this.hotlist[num];
    } else {
      if (type === 'next') {
        this.hotnow++;
        if (this.hotnow > this.hotlist.length - 1) {
          this.hotnow = 0;
        }
      } else if (type === 'prev') {
        this.hotnow--;
        if (this.hotnow < 0) {
          this.hotnow = this.hotlist.length - 1
        };
      };
    }
  }
}

const home = new Home();
export default home;
