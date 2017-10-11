import React from "react";
import { Route } from "react-router-dom";
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    return (
      <div className="detail-box">
      </div>
    );
  }
}
