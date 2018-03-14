import React from "react";
import {Router, Route, Link, Switch} from "react-router-dom";
import LazyRoute from "lazy-route";
import online from "./online"
const myRoutes = [
  {
    path: '/',
    exact:true,
    component(props){
      return <LazyRoute {...props} component={import ("@/views/Home")}/>
    }
  }
]

const routes = myRoutes.concat(online)

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={props => (route.component(props))}/>
)

const RouteConfig = () => (
  <Switch>
    {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
  </Switch>
)

export default RouteConfig;
