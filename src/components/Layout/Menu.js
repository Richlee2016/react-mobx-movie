import React, { Component } from "react";
import less from "./layout.less";
import { Menu, Icon } from "antd";
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
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="menu-box">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Icon type="laptop" />熊猫推荐
          </Menu.Item>
          <Menu.Item key="movieDown">
            <Icon type="download" />电影下载
          </Menu.Item>
          <Menu.Item key="movieOnline">
            <Icon type="play-circle-o" />在线影视
          </Menu.Item>
          <Menu.Item key="movieNew">
            <Icon type="appstore" />电影资讯
          </Menu.Item>
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
