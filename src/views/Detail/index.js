import React from "react";
import { Route } from "react-router-dom";
import MovieDetail from "./childrens/Movie";
import NewDetail from "./childrens/New";
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    return (
      <div className="detail-box">
        <Route path={`${match.url}/movie/:id`} component={MovieDetail} />
        <Route path={`${match.url}/new/:id`} component={NewDetail} />
      </div>
    );
  }
}
