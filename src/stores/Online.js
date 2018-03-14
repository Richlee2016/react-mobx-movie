import {
  observable,
  action,
  computed,
  runInAction,
  toJS
} from "mobx";
import {online as config} from "@/config" 
import {
  Get_Oline_Page,
  Get_Oline_Vod
} from "@/servers/online";
class List {
  /**observable------------------------------------------------------ */
  @observable home = {};
  @observable classify = {};
  @observable vodlist=[];
  @observable vodnow = {};
  /**computed------------------------------------------------------ */
 
  /**action------------------------------------------------------ */
  @action //获取主页
  async get_online_home() {
    const res = await Get_Oline_Page({
      type: 21,
      href: 'home'
    });
    runInAction(() => {
      this.home = res.data.list;
    })
  }

  @action //获取分类页
  async get_online_classify(href) {
    const fiHref = config.classify.filter(o => o.href === href)
    let type;
    if(fiHref.length > 0){
      type = fiHref[0].type;
    }else{
      type = 29;
    }
    const res = await Get_Oline_Page({type,href});
    runInAction(() => {
      this.classify = res.data.list;
    })
  }

  @action //获取电影
  async get_online_vod(uid){
    const id = Number(uid.match(/\d+/)[0]);
    const vod = this.vodlist.find(o => o.id === id);
    try {
      let newVod;
      if(vod){
        newVod = vod;
      }else{
        const {data} = await Get_Oline_Vod(id);
        newVod = data;
      }
      runInAction(() => {
        this.vodlist.push(newVod);
        this.vodnow = newVod;
      })
    } catch (error) {
      console.error(error);
    }
  }
}

const list = new List();
export default list;
