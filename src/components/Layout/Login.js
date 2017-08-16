import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./layout.less";
import QueueAnim from "rc-queue-anim";

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false
    };
  }
  // 关闭
  closeLogin = () => {
    this.setState({ ...this.state, show: false });
  };
  // 打开
  openLogin = type => {
    this.setState({ ...this.state, show: true });
    switch (type) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  };
  render() {
    const login = this.props.logins.map(o =>
      <li
        key={o.name}
        onClick={() => {
          this.openLogin(o.handle);
        }}
      >
        <i className={`iconfont icon-${o.name}`} />
      </li>
    );

    return (
      <div className="load">
        <ul>
          {login}
        </ul>
        <div
          className="fadeBox"
          style={{ display: this.state.show ? "flex" : "none" }}
          onClick={this.closeLogin}
        >
          <QueueAnim type={["scale"]} ease={["easeOutQuart"]}>
            {this.state.show
              ? [<div className="loginbox" key="a" />]
              : null}
          </QueueAnim>
        </div>
      </div>
    );
  }
}

Login.PropTypes = {};

export default Login;
