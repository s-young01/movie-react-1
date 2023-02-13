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
        <h2><Link to='/latest'>최신영화</Link></h2>
        <Slider {...settings} className='slider'>
          <Link to='/detail/1'>
            <div className="slide">
              <img src="images/poster1_1.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/2'>
            <div className="slide">
              <img src="images/poster1_2.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/3'>
            <div className="slide">
              <img src="images/poster1_3.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/4'>
            <div className="slide">
              <img src="images/poster1_4.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/5'>
            <div className="slide">
              <img src="images/poster1_5.jpg" alt=""/>
            </div>
          </Link>
          <Link to='/detail/6'>
            <div className="slide">
              <img src="images/poster1_6.jpg" alt=""/>
            </div>
          </Link>
        </Slider>
      </div>
    );
  }
}