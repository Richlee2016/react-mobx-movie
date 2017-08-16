import { observable, action, computed } from 'mobx';

class Count {
    @observable count;
    constructor(){
        this.count = 0;
    }

    @computed get mycount() {
        if(this.count<0){
            return 0;
        }else if(this.count>10){
            return 10;
        }
        return this.count;
    }

    @action add = ()=>{
        this.count++;
    }
    @action mine = ()=>{
        this.count--;
    }
}

const count = new Count();
export default count;