import React, { Component } from "react";
import less from "./layout.less";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { menus as menuConfig } from "@/config"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menus extends React.Component {
  constructor(props) {
    super();
    this.state = {
      current: "home"
    };
  }
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {

    const menuItem = menuConfig.map(o => {
      return (<Menu.Item key={o.key}>
        <Link to={o.href}>
          <Icon type={o.icon} />{o.name}
      </Link>
      </Menu.Item>)
    })

    return (
      <div className="menu-box">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {menuItem}
          <Menu.Item key="book">
            <a
              href="http://book.richfly.cn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="book" />熊猫读书
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Menus;
