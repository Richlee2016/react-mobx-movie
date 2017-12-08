import React from "react";
import { Switch, Route } from "react-router-dom";
import LazyRoute from "lazy-route";
class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="movie-main">
      <Switch>
        <Route
          path="/movie"
          exact
          render={props => (
            <LazyRoute {...props} component={import("./Home")} />
          )}
        />
      </Switch>
      </div>
    );
  }
}
export default Movie;
