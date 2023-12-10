import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Nutrition() {
  const titleVariants = {
    visible: {
      opacity: 1,
      rotateX: 0,
      x: 0,
      y: 0,
      scale: 1.1,
      transition: { type: 'spring', stiffness: 50, damping: 40 },
    },
    hidden: {
      opacity: 0,
      rotateX: 90,
      x: 100,
      y: 10,
      scale: 0.9,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const fadeInVariants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 90,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.4,
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [fadeRef, fadeInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="nutrition section" id="nutrition">
      <div className="nutrition_container">
        <motion.h2
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Nutrition
        </motion.h2>

        <div className="nutrition_items_container">
          <div className="title_container">
            {/* Nutrition items */}
            {/* ... */}
          </div>

          <motion.div
            ref={fadeRef}
            variants={fadeInVariants}
            animate={fadeInView ? 'visible' : 'hidden'}
          >
            <img className="nutrition_image" src="2d-ice.png" alt="2d-ice" />
          </motion.div>
        </div>

        <div className="nutrition_comment">
          {/* Nutrition comments */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
