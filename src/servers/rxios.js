var qs = require('querystring')
import root from "../stores"
console.log(root);
import axios from 'axios'
// 添加请求拦截器
//  get、post
export default (type, url, data, mixin) => {
    const qsData = qs.stringify(data);
    const opt = {
      method: "get",
      url: url
    };
  
    return new Promise((resolve, reject) => {
      switch (type) {
        case "GET":
          if (data && Object.keys(data).length > 0) {
            Object.assign(opt, {
              url: `${url}?${qsData}`
            });
          }
          break;
  
        case "POST":
          Object.assign(opt, {
            method: "post",
            data: data
          });
          break;
      }
      console.log(opt);
      axios(opt)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  };