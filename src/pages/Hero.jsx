import React from 'react';
import Parallax from './Parallax';

const Star = ({ size, left, top, backgroundColor }) => (
  <div
    style={{
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      backgroundColor,
      left: `${left}%`,
      top: `${top}%`,
    }}
  />
);

function getRandomColor() {
  const baseValue = 200;
  const red = baseValue + Math.floor(Math.random() * 30);
  const green = baseValue + Math.floor(Math.random() * 30);
  const blue = baseValue + Math.floor(Math.random() * 30);
  return `rgb(${red}, ${green}, ${blue})`;
}

function Hero() {
  const stars = Array.from({ length: 100 }).map((_, i) => (
    <Star
      key={i}
      backgroundColor={getRandomColor()}
      size={Math.random() * 4}
      left={Math.random() * 100}
      top={Math.random() * 100}
    />
  ));

  return (
    <div className="hero" id="hero">
      <div className="bgi"></div>
      <div className="parallax_container">
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
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
          <img src="Vanilla.png" alt="" />
        </div>
        <p className="hero_p">
          Improve your health <br className="dn-for-pc" /> while chilling.
        </p>
      </div>
    </div>
  );
}

export default Hero;
