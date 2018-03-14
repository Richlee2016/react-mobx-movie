import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Header, Search, Navs } from "./Layout";
import RouterCom from '@/router'
import "./Index.less";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          <RouterCom />
        </div>
      </div>
    );
  }
}
