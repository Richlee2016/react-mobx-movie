import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import {Login,UserCenter,Menu} from './index'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: "icon-p"
    };
  }
  //logo操作
  logoHandle = () => ({
    over: () => this.setState({ logo: "icon-p1" }),
    out: () => this.setState({ logo: "icon-p" })
  });
  
  isLogin = (user,logins) => {
    if (user) {
      return <UserCenter user={user} />
    }else{
      return <Login logins={logins} />
    }
  };

  render() {
    const { menus, logins, user } = this.props;
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
          {this.isLogin(user,logins)}
        </div>
      </div>
    );
  }
}

export default Header;
