import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./movieblock.less";
import BlockBoxOne from './components/BlockBoxOne'


const BlockOne = ({ data }) => {
  const movies = data.map( o => <BlockBoxOne key={o.id} movie={o} />)
  return (
    <ul className="block-one">
      {movies}
    </ul>
  );
};

BlockOne.propTypes = {
  // data:PropTypes.object
};

export default BlockOne;
