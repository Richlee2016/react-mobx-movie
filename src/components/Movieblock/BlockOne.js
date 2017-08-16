import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./movieblock.less";
import BlockBoxOne from './components/BlockBoxOne'
import BlockBanner from './components/BlockBanner'


const BlockOne = ({ data }) => {
  // banner
  const {one,two} = data;
  return (
    <div className="blockOne">
      <BlockBanner data={one} />
      <BlockBoxOne data={two} />
    </div>
  );
};

BlockOne.propTypes = {
  // data:PropTypes.object
};

export default BlockOne;
