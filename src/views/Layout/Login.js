import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./layout.less";
import QueueAnim from "rc-queue-anim";
import qs from "querystring"
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

  getInfo() {
    const sendData = {
      response_type: "code",
      client_id: 101435375,
      redirect_uri: encodeURI("http://173gg43187.iok.la/oauth/qq"),
      state: location.href
    };
    const href = `https://graph.qq.com/oauth2.0/authorize?${qs.stringify(
      sendData
    )}`;
    location.href = href;
  }
  
  // 打开
  openLogin = type => {
    // this.setState({ ...this.state, show: true });
    switch (type) {
      case 1:
      this.getInfo();
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
        <a><i className={`iconfont icon-${o.name}`} /></a>
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
            {this.state.show ? [<div className="loginbox" key="a" />] : null}
          </QueueAnim>
        </div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
