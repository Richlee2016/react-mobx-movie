import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./less/boxone.less";
import { Link } from "react-router-dom";
const BlockBoxOne = ({ movie }) => {
  return (
    <li className="movie-box vivify animationObject popInTop">
      <Link to={`/detail/movie/${movie.id}`}>
        <div>
          <img src={movie.img} />
          <span className="black-block">{movie.year}</span>
          <span className="black-block">{movie.score}</span>
          <p className="black-block">{movie.name}</p>
        </div>
      </Link>
    </li>
  );
};

BlockBoxOne.propTypes = {
  // data:PropTypes.array
};

export default BlockBoxOne;
