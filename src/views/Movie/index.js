import React from "react";
import { Switch, Route } from "react-router-dom";
import LazyRoute from "lazy-route";
import { Search } from "./components";
import "./Movie.less"
class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="movie-main">
        <div className="movie-header">
          <div className="movie-search">
            <div className="serachBox">
              <input id="searchVal" placeholder="影片名/明星/导演" value="" />
              <i id="searchGo" className="iconfont icon-sousuo" />
            </div>
            <div className="rank">
              <i className="iconfont icon-paixing" />
              <span>排行榜</span>
            </div>
          </div>
        </div>
        <Switch>
          <Route
            path="/movie"
            exact
            render={props => (
              <LazyRoute {...props} component={import("./Home")} />
            )}
          />
        </Switch>
        <Switch>
          <Route
            path="/movie/:id"
            exact
            render={props => (
              <LazyRoute {...props} component={import("./Detail")} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default Movie;
