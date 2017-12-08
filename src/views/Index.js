import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Header, Search, Navs } from "./Layout";
import RouterBox from "@/routers";

import "./Index.less";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <RouterBox />
        </Switch>
      </div>
    );
  }
}
