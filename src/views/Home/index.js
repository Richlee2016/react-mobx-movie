import React from "react";
import "./home.less";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { Row, Col, Button } from "antd";
import { dropRightWhile, chain } from "lodash";


@inject("home")
@observer
class Special extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.home;
  }

  render() {
    const { data } = this.store;
    const actors = toJS(data.actor)
      .filter((o, i) => i <= 3)
      .join("、");
    return (
      <div className="video-play-home">
        <video loop autoPlay>
          <source
            src="/static/videos/wm.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

export default Special;
