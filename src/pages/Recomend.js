import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from "react";
import './Slider.scss';

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      
    };
    return (
      <div className='inner latest'>
        <h2>추천영화</h2>
        <Slider {...settings} className='slider'>
          <div className="slide">
            <img src="images/The First Slam Dunk.jpg" alt=""/>
          </div>
          <div className="slide">
            <img src="images/The Point Men.jpg" alt=""/>
          </div>
          <div className="slide">
            <img src="images/The First Slam Dunk.jpg" alt=""/>
          </div>
          <div className="slide">
            <img src="images/The Point Men.jpg" alt=""/>
          </div>
          <div className="slide">
            <img src="images/The First Slam Dunk.jpg" alt=""/>
          </div>
          <div className="slide">
            <img src="images/The Point Men.jpg" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}