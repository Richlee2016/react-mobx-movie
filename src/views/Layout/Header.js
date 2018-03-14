import React, { Component } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import {toJS} from "mobx"
import Logo from "./Logo";
import {Login,UserCenter,Menu} from './index'
import * as config from "@/config";

@inject("app")
@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.menus = config.menus;
    this.logins = config.logins;
    this.store = this.props.app;
    this.state = {
      logo: "icon-p"
    };
  }

  componentDidMount(){
    // this.store.Login(location.hash);
  }

  //logo操作
  logoHandle = () => ({
    over: () => this.setState({ logo: "icon-p1" }),
    out: () => this.setState({ logo: "icon-p" })
  });
  
  isLogin = (user,logins,LogOut) => {
    if (user) {
      return <UserCenter user={user} logOut={LogOut} />
    }else{
      return <Login logins={logins} />
    }
  };

  render() {
    const {user,LogOut} = this.store;
    const { logo } = this.state;
    return (
      <div className="header">
        <div className="headBox">
          <div className="logo-box">
            <i
              className={`iconfont ${logo}`}
              onMouseOver={this.logoHandle().over}
              onMouseOut={this.logoHandle().out}
            />
          </div>
          <Menu />
          {/*{this.isLogin(user,this.logins,LogOut)}*/}
        </div>
      </div>
    );
  }
}

export default Header;
