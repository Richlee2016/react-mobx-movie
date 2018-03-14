import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
export default function({tags}){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
        <div><h3>1wseffdffsdfss</h3></div>
        <div><h3>2dfsdfsfdsfsdf</h3></div>
        <div><h3>3sdffsdfsddssdfsfd</h3></div>
        <div><h3>4sdfdsffsdfsdfsdf</h3></div>
        <div><h3>5fdsfdssdfsd</h3></div>
        <div><h3>fsdfdsfsd6fsdfsdfsdfds</h3></div>
        </Slider>
    )
}