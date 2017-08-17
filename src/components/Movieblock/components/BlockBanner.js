import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "../movieblock.less";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";

const BgElement = Element.BgElement;

const BlockBanner = ({ data }) => {
  const bannerImg = data;
  const hasImg = n => (bannerImg[n] ? bannerImg[n].details.img : "");

  return (
    <BannerAnim className="blockBanner" type="across" autoPlay={true}>
      <Element prefixCls="banner-user-elem" key="1">
        <BgElement
          key="bg"
          className="bannerImg"
          style={{
            backgroundImage: `url(${hasImg(0)})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center"
          }}
        />
      </Element>
      <Element prefixCls="banner-user-elem" key="2">
        <BgElement
          key="bg"
          className="bannerImg"
          style={{
            backgroundImage: `url(${hasImg(1)})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center"
          }}
        />
      </Element>
      <Element prefixCls="banner-user-elem" key="3">
        <BgElement
          key="bg"
          className="bannerImg"
          style={{
            backgroundImage: `url(${hasImg(2)})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center"
          }}
        />
      </Element>
      <Element prefixCls="banner-user-elem" key="4">
        <BgElement
          key="bg"
          className="bannerImg"
          style={{
            backgroundImage: `url(${hasImg(3)})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center"
          }}
        />
      </Element>
    </BannerAnim>
  );
};

BlockBanner.propTypes = {};

export default BlockBanner;
