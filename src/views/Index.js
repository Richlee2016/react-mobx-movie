import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import {toJS} from "mobx"
import { Header, Search, Navs } from "@/components/Layout";
import RouterBox from "@/routers";
import bannerImg from "@/assets/images/test.jpg";
import * as config from "@/config";
import "./Index.less";

@inject("app", "list")
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.app;
    this.list = this.props.list;
  }

  componentDidMount() {
    this.store.Login(location.hash);
  }

  render() {
    const { location } = this.props;
    const { user } = toJS(this.store);
    const { getListData } = this.list;
    return (
      <div className="container">
        <Header menus={config.menus} logins={config.logins} user={user} />
        {/*<div className="banner" style={{ background: `url(${bannerImg})` }} />
        <Search />
        <Navs navs={config.navs} location={location} listChange={qs => {getListData(qs)}} />
      */}
        <RouterBox />
      </div>
    );
  }
}
