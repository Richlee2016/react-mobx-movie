import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "../movieblock.less";

const BlockHeader = ({moveHandle}) => {
  let navarr = [];
  for (var i = 0; i < 8; i++) {
    navarr.push(i);
  }

  const nav = navarr.map( (o,i) => {
    return (
      <li key={o} onMouseMove={() => {moveHandle(i)}}>{o}</li>
    )
  })

  return (
    <div className={less.blockHeader}>
      <div className={less.blockTitle}></div>
      <ul className={less.blockNavs}>
        {nav}
      </ul>
    </div>
  );
};

BlockHeader.propTypes = {

};

export default BlockHeader;
