import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import {toJS} from "mobx"
import {Switch} from "react-router-dom";
import { Header, Search, Navs } from "@/components/Layout";
import RouterBox from "@/routers";
import bannerImg from "@/assets/images/test.jpg";
import * as config from "@/config";
import "./Index.less";

@inject("app")
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.app;
  }

  componentDidMount() {
    // this.store.Login(location.hash);
  }

  render() {
    const { user } = toJS(this.store);
    return (
      <div className="container">
        <Header menus={config.menus} logins={config.logins} user={user} />
        <Switch>
        <RouterBox />
        </Switch>
      </div>
    );
  }
}
