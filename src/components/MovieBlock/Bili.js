import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./less/bili.less";

const Bili = ({ data }) => {

  const bilis = data.map((o,i) => {
    return (
      <li key={o.av} className="vivify animationObject">
      <div className="bili-img">
      <a href={`https://www.bilibili.com/video/${o.av}/`} target="view_window">
        <img src={`http://codeli.leanapp.cn/image?url=http:${o.img}`} />
      </a>
      </div>
      <span className="time">{o.time}</span>
      <div className="bili-info">
        <a className="title" href={`https://www.bilibili.com/video/${o.av}/`} target="view_window">
        <p>{o.title}</p>
        </a>
        <div>
          <label>{o.playTime}</label>
          <span>{o.upTime}</span>
        </div>
        <a className="up-zhu" href={`https://space.bilibili.com/${o.upZhu.id}`} target="view_window">{o.upZhu.name}</a>
      </div>
      </li>
    )
  })      
  return (
    <ul className="bili-block">
    {bilis}
    </ul>
  );
};

Bili.propTypes = {
  // data:PropTypes.object
};

export default Bili;
