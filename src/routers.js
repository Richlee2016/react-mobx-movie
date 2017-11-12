import React from "react";
import { Route, Link, Switch,Redirect } from "react-router-dom";
import LazyRoute from "lazy-route";

export default class Routers extends React.Component {
  render() {
    return (
      <div className="main">
        <Route
          path="/"
          exact 
          render={props => (
            <LazyRoute {...props} component={import("@/views/Home")} />
          )}
        />
        <Route
          path="/movie"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Movie")} />
          )}
        />
        <Route
          path="/online"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Online")} />
          )}
        />
        <Route
          path="/news"
          render={props => (
            <LazyRoute {...props} component={import("@/views/News")} />
          )}
        />
      </div>
    );
  }
}
