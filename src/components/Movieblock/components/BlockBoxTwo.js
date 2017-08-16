import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "../movieblock.less";

const BlockBoxTwo = ({ data }) => {

  const box = data.map((o, i) => {
    return (
      <li key={o.id}>
        <em>
          {i + 1}
        </em>
        {i === 0 ? <img src={o.details.img} /> : null}
        <span>
          {o.name}
        </span>
      </li>
    );
  });

  return (
    <ul className={less.blockBoxTwo}>
      {box}
    </ul>
  );
};

BlockBoxTwo.propTypes = {};

export default BlockBoxTwo;
