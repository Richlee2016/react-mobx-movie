import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LazyRoute from "lazy-route";

export default class Routers extends React.Component {
  render() {
    return (
      <div className="main">
        <Route
          path="/"
          render={props => (
            <LazyRoute {...props} component={import("@/views/DailySpecial")} />
          )}
        />
        {/*
          <Route
          path="/movies"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Movies")} />
          )}
        />
        <Route
          path="/teleplays"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Teleplays")} />
          )}
        />
        <Route
          path="/cartoons"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Cartoons")} />
          )}
        />
        <Route
          path="/news"
          render={props => (
            <LazyRoute {...props} component={import("@/views/News")} />
          )}
        />
        <Route
          path="/ranks"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Ranks")} />
          )}
        />
        <Route
          path="/list"
          render={props => (
            <LazyRoute {...props} component={import("@/views/List")} />
          )}
        />
        <Route
          path="/movie/:id"
          render={props => (
            <LazyRoute {...props} component={import("@/views/Detail")} />
          )}
        />
        */}
      </div>
    );
  }
}
