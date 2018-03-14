import React from "react";
import {Router, Route, Link, Switch} from "react-router-dom";
import LazyRoute from "lazy-route";
export default [
  {
    path: '/online',
    exact:true,
    component(props){
      return <LazyRoute {...props} component={import ("@/views/Online")}/>
    }
  },
  {
    path: '/online/classfy/:type',
    component(props){
      return <LazyRoute {...props} component={import ("@/views/Online/pages/OlClassify")}/>
    }
  },
  {
    path: '/online/vod/:id',
    component(props){
      return <LazyRoute {...props} component={import ("@/views/Online/pages/OlVod")}/>
    }
  }
]
