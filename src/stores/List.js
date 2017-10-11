import { observable, action, computed, runInAction } from "mobx";
import {get_movie_list} from "@/servers/server";
class List {
  @observable list
  constructor() {
    this.list = {}
  }

  //获取首页
   getListData = async (qs) => {
      const listRes = await get_movie_list(qs);
      const {data:{code,data}} = listRes;
      if(code === 1){
        runInAction(() => {
          this.list = data;
        })
      };
  }
}

const list = new List();
export default list;
