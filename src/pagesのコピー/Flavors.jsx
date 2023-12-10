import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import flavorsData from '../data/flavorsData';


// 🌸
import Slider from 'react-slick';

export default function Flavors() {
  const variants = {
    visible: {
      opacity: 1,
      rotateX: 0,
      // rotateZ: 1,
      x: 0,
      y: 0,
      scale: 1.1,
      transition: { type: 'spring', stiffness: 50, damping: 40 },
    },
    hidden: {
      opacity: 0,
      rotateX: 90,
      x: -100,
      y: 10,
      scale: 0.9,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.9,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    swipeToSlide: true,
    arrows: true,
    // pauseOnHover: true,
    // cssEase: 'linear',
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)', 
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.4,
        },
      },
    ],
    // focusOnSelect: true,
    // rtl: true
  };

  return (
    <div className="flavors section" id="flavors">
      <div className="flavors_container">
        <motion.h2
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Flavors
        </motion.h2>

        {/* <div className="flavors_items_container"> */}
          <Slider {...settings} className='slider_container'>
            {/* <div>
              <div className="carousel_div">Card 1</div>
            </div>
            <div className="">
              <div className="carousel_div">Card 2</div>
            </div>
            <div className="">
              <div className="carousel_div">Card 3</div>
            </div>
            <div className="">
              <div className="carousel_div">Card 4</div>
            </div>
            <div className="">
              <div className="carousel_div">Card 5</div>
            </div>
            <div className="">
              <div className="carousel_div">Card 6</div>
            </div> */}
            {flavorsData.map((flavor) => (
              
              <div key={flavor.id} className="flavors_item" style={{ width: 100 }}>
                {/* <div className="carousel_div"  > */}

                  <div className="item_image_container">
                    <img key={flavor.id} src={flavor.image} alt="" />
                    {/* <Spline scene="https://prod.spline.design/MQ4Us0NIJLzxv7lp/scene.splinecode" /> */}

                  </div>
                  
                  <div className="item_text_container">
                      <h3 className="item_name">{flavor.title}</h3>
                    <div className="item_description">
                      <p className="item_intro">{flavor.desc}</p>
                      <p className="item_kcal">
                        <span className="bold_kcal">{flavor.kcal}</span>kcal
                      </p>
                    </div>
                  {/* </div> */}
                </div>

               </div>

            ))}
          </Slider>
        {/* </div> */}
      </div>
    </div>
  );
}
