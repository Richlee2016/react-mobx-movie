import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./layout.less";
import TweenOne from "rc-tween-one";
import { Link } from "react-router-dom";
import { qs } from "@/assets/utils";
const Navs = function({ navs, location,listChange }) {

  const { catalog } = qs(location.search);

  const nav = navs.map((o, i) => (
    <li key={o.name} onClick={() => {listChange(qs(o.href))}}>
      <Link to={`/list?${o.href}`}>
        <span>10</span>
        <label style={{ color: catalog === o.name ? "#00a1d6" : "initial" }}>
          {o.name}
        </label>
      </Link>
    </li>
  ));

  let animation = {};
  navs.forEach((o, i) => {
    if (catalog === o.name) {
      animation = { left: 80 / 13 * i + "%", duration: 400 };
    } else if (catalog === undefined) {
      animation = { left: "0%", duration: 400 };
    }
  });

  return (
    <div className="navs">
      <ul className="nav">{nav}</ul>
      {location.pathname === "/list" ? (
        <TweenOne animation={animation} className="navGo" />
      ) : null}
    </div>
  );
};

Navs.propTypes = {
  navs: PropTypes.array,
  location:PropTypes.object,
  listChange:PropTypes.func
};

export default Navs;
