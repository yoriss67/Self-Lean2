// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';
// import Slider from 'react-slick';
// import flavorsData from '../data/flavorsData';

// export default function Flavors() {
//   const variants = {
//     visible: { opacity: 1, rotateX: 0, x: 0, y: 0, scale: 1.1, transition: { type: 'spring', stiffness: 50, damping: 40 } },
//     hidden: { opacity: 0, rotateX: 90, x: -100, y: 10, scale: 0.9, transition: { type: 'spring', stiffness: 50, damping: 20 } },
//   };

//   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3.9,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     arrows: true,
//     cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)', 
//     initialSlide: 0,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2.8 } },
//       { breakpoint: 600, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1.4 } },
//     ],
//   };

//   return (
//     <div className="flavors section" id="flavors">
//       <div className="flavors_container">
//         <motion.h2 ref={ref} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, ease: 'easeOut' }}>
//           Flavors
//         </motion.h2>

//         <Slider {...settings} className='slider_container'>
//           {flavorsData.map((flavor) => (
//             <div key={flavor.id} className="flavors_item" style={{ width: 100 }}>
//               <div className="item_image_container">
//                 <img key={flavor.id} src={flavor.image} alt="" />
//               </div>
//               <div className="item_text_container">
//                 <h3 className="item_name">{flavor.title}</h3>
//                 <div className="item_description">
//                   <p className="item_intro">{flavor.desc}</p>
//                   <p className="item_kcal">
//                     <span className="bold_kcal">{flavor.kcal}</span>kcal
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import flavorsData from '../data/flavorsData'

// Define the type for each flavor item
type FlavorItem = {
  id: number;
  image: string;
  title: string;
  desc: string;
  kcal: number;
};

export default function Flavors() {
  const variants = {
    visible: { opacity: 1, rotateX: 0, x: 0, y: 0, scale: 1.1, transition: { type: 'spring', stiffness: 50, damping: 40 } },
    hidden: { opacity: 0, rotateX: 90, x: -100, y: 10, scale: 0.9, transition: { type: 'spring', stiffness: 50, damping: 20 } },
  };

  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.9,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)', 
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2.8 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1.4 } },
    ],
  };

  return (
    <div className="flavors section" id="flavors">
      <div className="flavors_container">
        <motion.h2 ref={ref} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, ease: 'easeOut' }}>
          Flavors
        </motion.h2>

        <Slider {...settings} className='slider_container'>
          {flavorsData.map((flavor: FlavorItem) => (
            <div key={flavor.id} className="flavors_item" style={{ width: 100 }}>
              <div className="item_image_container">
                <img key={flavor.id} src={flavor.image} alt={flavor.title} />
              </div>
              <div className="item_text_container">
                <h3 className="item_name">{flavor.title}</h3>
                <div className="item_description">
                  <p className="item_intro">{flavor.desc}</p>
                  <p className="item_kcal">
                    <span className="bold_kcal">{flavor.kcal}</span>kcal
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
