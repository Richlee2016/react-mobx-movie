import React from "react";
import "./home.less";
import qs from "queryString";
import axios from 'axios'
class Special extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

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

  async login() {
    const res = axios('/oauth/login');
    console.log(res);
  }

  async logout() {
    const res = axios('/oauth/logout');
    console.log(res);
  }

  async logadd() {
    const res = axios('/oauth/test');
    console.log(res);
  }

  go = () => {
    // this.props.history.push("/movie");
  }
  render() {
    return (
      <div className="daily-special">
        <span id="qqLogin">test</span>
        <button onClick={this.getInfo}>getInfo</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.logout}>logout</button>
        <button onClick={this.logadd}>logadd</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

export default Special;
