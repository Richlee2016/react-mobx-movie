import React from "react";
import { Route, Link } from "react-router-dom";
import LazyRoute from "lazy-route";

export default class Routers extends React.Component {
  render() {
    return (
      <div className="router-box">
        <Route
          exact
          path="/"
          render={props =>
            <LazyRoute {...props} component={import("@/views/Home")} />}
        />
        <Route
        exact
        path="/movie"
        render={props =>
          <LazyRoute {...props} component={import("@/views/Movies")} />}
        />
      </div>
    );
  }
}
