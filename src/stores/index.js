import {observable, action, computed, runInAction} from "mobx";
import Home from './Home'
import Online from './Online'
import axios from "axios"
export default class RootStore {
    constructor() {
        this.online = new Online(this);
        this.home = new Home(this);
        this.axiosLoading();
    }

    @observable loading = null;

    @action
    startLoading() {
        this.loading = true;
    }

    @action
    endLoading() {
        this.loading = false;
    }

    //响应loading
    @action
    axiosLoading() {
        axios
            .interceptors
            .request
            .use(config => {
                this.loading = true;
                return config;
            }, error => {
                return Promise.reject(error);
            });
        axios
            .interceptors
            .response
            .use(response => {
                setTimeout(() => {
                    this.loading = false;
                },200)
                return response;
            }, error => {
                return Promise.reject(error);
            });
    }
}