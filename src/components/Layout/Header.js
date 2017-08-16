import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginBox from "./Login";
const Header = ({menus,logins}) => {

  // 菜单栏
  const menu = menus.map(o =>
    <li key={o.name}>
      {o.name}
    </li>
  );

  return (
    <div className="header">
      <div className="headBox">
        <ul className="menus">
          {menu}
        </ul>
        <LoginBox logins={logins} />
      </div>
    </div>
  );
};

Header.propTypes = {
  // menus: PropTypes.array,
  // logins: PropTypes.array,
};

export default Header;
