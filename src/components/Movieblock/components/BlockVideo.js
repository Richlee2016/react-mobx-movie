import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "../movieblock.less";
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;

const BlockBoxVideo = () => {

  return (
       <BannerAnim className="blockVideo">
        <Element key="aaa"
          prefixCls="banner-user-elem"
        >
          <BgElement key="bg" className="bg">
            <video loop autoPlay>
              <source src="https://os.alipayobjects.com/rmsportal/CoDFvoxaQpTnLOM.mp4" type="video/mp4" />
            </video>
          </BgElement>
        </Element>
      </BannerAnim>
  );
};

BlockBoxVideo.propTypes = {
 
};

export default BlockBoxVideo;
