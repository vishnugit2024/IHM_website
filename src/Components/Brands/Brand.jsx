import React from 'react';
import './Brand.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Brand1 from '../../Assets/asian-logo-removebg-preview.png';
import Brand2 from '../../Assets/ebco-logo-removebg-preview.png';
import Brand3 from '../../Assets/hafele-logo-removebg-preview.png';
import Brand4 from '../../Assets/hettich-logo-removebg-preview.png';
import Brand5 from '../../Assets/kohler-logo-removebg-preview.png';
import Slider from 'react-slick/lib/slider';

const Brand = () => {
  const settings = {
    dots: false, // Enable dots for navigation if needed
    infinite: true,
    speed: 2000,
    slidesToShow: 4,  // Number of logos shown at a time
    slidesToScroll: 1, 
    autoplay: true ,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
    <div className="container-fluid brandbg">
      <Slider {...settings}>
      
        <div className="brandimg">
          <img src={Brand1} alt="logo" />
        </div>
        <div className="brandimg">
          <img src={Brand2} alt="logo" />
        </div>
        <div className="brandimg">
          <img src={Brand3} alt="logo" />
        </div>
        <div className="brandimg">
          <img src={Brand4} alt="logo" />
        </div>
        <div className="brandimg">
          <img src={Brand5} alt="logo" />
        </div>
      </Slider>
    </div>
</>
  
  )
}

export default Brand