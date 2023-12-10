import React, { useState, useEffect } from 'react';
// import Spline from '@splinetool/react-spline';
import Parallax from './Parallax';

const Star = ({ size, left, top, backgroundColor }) => (
  <div
    style={{
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      // backgroundColor: 'white',
      backgroundColor,
      left: `${left}%`,
      top: `${top}%`,
    }}
  />
);

function getRandomColor() {
  const baseValue = 200;
  var red = baseValue + Math.floor(Math.random() * 30);
  var green = baseValue + Math.floor(Math.random() * 30);
  var blue = baseValue + Math.floor(Math.random() * 30);

  // Create a CSS color string using the RGB values
  var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

  return color;
}

function Hero() {
  const stars = Array.from({ length: 100 }).map((_, i) => (
    <Star
      key={i}
      backgroundColor={getRandomColor()}
      size={Math.random() * 4} // Random size between 0 and 2
      left={Math.random() * 100} // Random position from 0 to 100%
      top={Math.random() * 100} // Random position from 0 to 100%
    />
  ));

  return (
    <div className="hero" id="hero">
      <div className="bgi"></div>
      <div className="parallax_container">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ height: '100%' }}>
            <Parallax offset={200}>{stars}</Parallax>
          </div>
        </div>
      </div>

      <div className="hero_scroll">
        <div className="hero_arrow_container">
          <div className="hero_arrow"></div>
        </div>
        <img src="frame.svg" alt="logo" />
      </div>

      <div className="hero_container">
        <h1 className="hero_h1">Lean</h1>

        <div className="hero_image_container">
          {/* spline */}
          {/* <div className="hero_image_bg"> */}
          <img src="Vanilla.png" alt="" />
          {/* <Spline scene="https://prod.spline.design/MQ4Us0NIJLzxv7lp/scene.splinecode" /> */}

          {/* </div> */}
        </div>
        <p className="hero_p">
          Improve your health <br className="dn-for-pc" /> while chilling.
        </p>
      </div>
    </div>
  );
}
export default Hero;
