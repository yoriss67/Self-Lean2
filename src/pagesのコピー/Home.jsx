

import React, { useState, useEffect } from 'react';
import { Hero2, Message,  Flavors2, Media, Nutrition} from '../index';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "../index.css"

function Home() {
  // const [bgColor, setBgColor] = useState('#3d6481');
  const [bgColor, setBgColor] = useState('#6892b1');


  const handleScroll = () => {
    const hero2 = document.getElementById('hero');
    const offsetTop = hero2.offsetTop;
    const offsetHeight = hero2.offsetHeight;

    if (window.scrollY > offsetTop + offsetHeight) {
      setBgColor("#F8F7EE");
      
      setBgColor("#fdccac82");

    } else {
      // setBgColor("#ec6701ba");
      setBgColor("#438ba3");

    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.transition = 'background-color 1s';  // Add this line
  }, [bgColor]);

  return (
    <div className='home'>
      <Hero2 id='hero' />
      <Message /> 
      <Flavors2 />
      <Media />
      <Nutrition />
      {/* <Parallax />
      <ParaChild /> */}
    
      {/* <Vertical /> */}
    </div>
  )
}
export default Home;
