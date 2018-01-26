import React from "react";
import "./home.less";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import xueyou from "@/assets/images/xueyou01.png";
import pandaTitle from "@/assets/images/icon-title.png"
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
      <div className="daily-special">
        <Row>
          <Col span={10} className="sp-text">
            <div className="sp-title">
              <label>学友怒荐：</label>
              <span>{data.name}</span>
            </div>
            <div className="sp-panda">
              <div className="sp-intro">
                <img src={data.img} />
                <ul>
                  <li>
                    <span>演员:</span>
                    <label>{actors}</label>
                  </li>
                  <li>
                    <span>导演:</span>
                    <label>{data.director}</label>
                  </li>
                  <li>
                    <span>年代:</span>
                    <label>{data.year}</label>
                  </li>
                </ul>
              </div>
              <img className="sp-face" src={xueyou} />
            </div>
            <div className="sp-title">
            <label>绝密档案</label>
            </div>
            <div className="sp-data">
            
            </div>
            {/*
              <p className="sp-introduce">{data.intro}</p>
            */}
            <ul className="sp-bili">
              <li>12</li>
            </ul>
          </Col>
          <Col span={14}>
            <div className="sp-video" />
            <div className="sp-douban" />
            <div>
              <Button>下载</Button>
              <Button>在线观看</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Special;
