import React, { Component } from "react";
import less from "./layout.less";
import { Popover, Button } from "antd";
class UserCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, logOut } = this.props;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    const title = (
      <div>
        <p>title</p>
        <span
          onClick={() => {
            logOut();
          }}
        >
          注销
        </span>
      </div>
    );
    return (
      <div className="user-center">
        <Popover
          placement="bottom"
          autoAdjustOverflow={false}
          content={content}
          title={title}
        >
          <label className="user-name">{user.nickname}</label>
          <div className="figureurl">
            <img src={user.figureurl} />
          </div>
        </Popover>
      </div>
    );
  }
}

export default UserCenter;
