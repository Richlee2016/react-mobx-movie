import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "../less/boxone.less";
import { Link } from "react-router-dom";
const reg = /http:\/\/img3\.doubanio\.com/; //饭防盗链
const imgHref = img => {
  const forbiden = reg.test(img);
  if(forbiden){
    return `http://codeli.leanapp.cn/image?url=${img}`
  }else{
    return img;
  }
}
const BlockBoxOne = ({ movie }) => {
  return (
    <li className="movie-box vivify animationObject popInTop">
      <Link to={`/movie/${movie.id}`}>
        <div>
          <img src={imgHref(movie.img)} />
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
