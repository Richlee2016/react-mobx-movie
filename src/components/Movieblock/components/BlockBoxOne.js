import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "../movieblock.less";
import { Link } from "react-router-dom";
const BlockBoxOne = ({ data }) => {
  //右侧分布
  const box = data.map(o => {
    return (
      <li key={o.id}>
        <Link to={`/detail/movie/${(o.id)}`}>
          <div>
            <img src={o.details.img} />
            <span>
              {o.name}
            </span>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <ul className="blockBoxOne">
      {box}
    </ul>
  );
};

BlockBoxOne.propTypes = {
  // data:PropTypes.array
};

export default BlockBoxOne;
