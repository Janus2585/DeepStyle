import React from 'react'
//relative paths do not work with create-react app when used in img tag. importing them like this fixes that
import Slider from 'react-slick'
import pic1 from '../img/deepstyle1.jpg'
import pic2 from '../img/deepstyle2.jpg'
import pic3 from '../img/deepstyle3.jpg'
import pic4 from '../img/deepstyle4.jpg'
import pic5 from '../img/deepstyle5.jpg'


//slider built with react-slick
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true
    };
    return (
    	<div id='slider'>
	      <Slider {...settings}>

	        <div><img src={pic2} alt='borat'/></div>
	        <div><img src={pic3} alt='borat'/></div>
	        <div><img src={pic4} alt='borat'/></div>
	        <div><img src={pic5} alt='borat'/></div>
	      </Slider>
        </div>
    );
  }
}

export default SimpleSlider