import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from "react";
import './Slider.scss';
import { Link } from "react-router-dom";

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
        <h2><Link to='/recomend'>추천영화</Link></h2>
        <Slider {...settings} className='slider'>
          <Link to='/detail/16'>
            <div className="slide">
              <img src="images/poster2_1.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/17'>
            <div className="slide">
              <img src="images/poster2_2.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/18'>
            <div className="slide">
              <img src="images/poster2_3.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/19'>
            <div className="slide">
              <img src="images/poster2_4.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/20'>
            <div className="slide">
              <img src="images/poster2_5.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/21'>
            <div className="slide">
              <img src="images/poster2_6.jpg" alt=""/>
            </div>
          </Link>
        </Slider>
      </div>
    );
  }
}