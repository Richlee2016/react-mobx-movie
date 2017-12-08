import React, { Component } from "react";
import less from "./layout.less";

class Logo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      logo: 'icon-p'
    };
  }

  logoOver = () => {
    this.setState({
      logo:'icon-p1'
    });
  }

  logoOut = () => {
    this.setState({
      logo:'icon-p'
    });
  }

  render() {
    const {logo} = this.state;
    return (
      <div className="logo-box">
        <i className={`iconfont ${logo}`} onMouseOver={this.logoOver} onMouseOut={this.logoOut} />
      </div>
    );
  }
}

export default Logo;
