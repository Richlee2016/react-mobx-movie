import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Header, Search, Navs } from "./Layout";
import {Spin} from "antd"
import RouterCom from '@/router'
import Animate from 'rc-animate';
import "./Index.less";

@inject("rootStore")
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.rootStore;
  }  

  render() {
    const {loading} = this.store;
    return (
      <div className="container">
        <Header />
        <Animate
          component=""
          transitionName="fade"
        >
          {
            loading ? 
              <div key="1" className="app-spin" /> : null}
        </Animate>
        <div className="main">
        <RouterCom />
        </div>
      </div>
    );
  }
}
