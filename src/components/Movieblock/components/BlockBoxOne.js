import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "../movieblock.less";

const BlockBoxOne = ({ data}) => {

  //右侧分布 
  const box = data.map(o => {
    return (
      <li key={o.id}>
        <div>
          <img src={o.details.img} />
          <span>
            {o.name}
          </span>
        </div>
      </li>
    );
  });

  return (
      <ul className={less.blockBoxOne}>
        {box}
      </ul>
  );
};

BlockBoxOne.propTypes = {
  data:PropTypes.array
};

export default BlockBoxOne;
