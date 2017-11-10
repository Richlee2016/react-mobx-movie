import React, { Component } from "react";
import less from "./layout.less";
import { Card } from "antd";
class UserCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: {display:'none'}
    };
  }

  menuHandle = () => ({
    out: () => this.setState({ fade: {display:'block'} }),
    in: () => {
      setTimeout(() => {
        this.setState({ fade: {display:'none'} })
      },800);
    }
  });

  render() {
    const { user } = this.props;
    const {fade} =  this.state;
    return (
      <div
        className="user-center"
        onMouseLeave={this.menuHandle().in}
        onMouseOver={this.menuHandle().out}
      >
        <label>{user.nickname}</label>
        <div className="figureurl">
          <img src={user.figureurl} />
        </div>
        <div className="card-box" style={fade}>
          <Card
            title="Card title"
            extra={<a href="#">More</a>}
            style={{ width: 200 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
    );
  }
}

export default UserCenter;
