import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./layout.less";
import TweenOne from "rc-tween-one";

class Navs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0,
      animation: { left: "0%", duration: 400 }
    };
  }

  navGo(i) {
    this.setState({
      ...this.state,
      active: i,
      animation: { left: 80 / 13 * i + "0%", duration: 400 }
    });
  }

  render() {
    const { navs } = this.props;
    const nav = navs.map((o, i) => {
      return (
        <li
          key={o.name}
          onClick={() => {
            this.navGo(i);
          }}
        >
          <span>10</span>
          <label
            style={{ color: this.state.active === i ? "#00a1d6" : "initial" }}
          >
            {o.name}
          </label>
        </li>
      );
    });

    return (
      <div className="navs">
        <ul className="nav">
          {nav}
        </ul>
        <TweenOne animation={this.state.animation} className="navGo" />
        <ul className="subnav" />
      </div>
    );
  }
}

Navs.PropTypes = {};

export default Navs;
