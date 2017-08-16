import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Count from "@/components/count";
import { Header, Search, Navs } from "@/components/Layout";
import RouterBox from "@/routers"
import bannerImg from "@/assets/images/test.jpg";
import "./Index.less";

@inject("app")
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.app;
  }

  render() {
    const { menus, logins, navs } = this.store;
    return (
      <div className="container">
        <Header menus={menus} logins={logins} />
        <div className="banner" style={{ background: `url(${bannerImg})` }} />
        <Search />
        <div className="main">
          <Navs navs={navs} />
          <RouterBox />
        </div>
      </div>
    );
  }
}
