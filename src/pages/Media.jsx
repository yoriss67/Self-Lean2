import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import mediaData from '../data/mediaData.json';

export default function Media() {
  const styles = {
    cYellow: {
      position: 'absolute',
      zIndex: -1,
      filter: 'blur(60px)',
      top: '20%',
      left: '10%',
      width: '25vw',
      height: '25vw',
      background: '#92C2D1',
      borderRadius: '50%',
      transformOrigin: '160px 100px',
    },
    cPink: {
      position: 'absolute',
      zIndex: -1,
      filter: 'blur(50px)',
      opacity: 0.5,
      top: '6%',
      right: '10%',
      width: '20vw',
      height: '20vw',
      background: '#EC6801',
      borderRadius: '50%',
    },
    cOrange: {
      position: 'absolute',
      zIndex: -1,
      filter: 'blur(40px)',
      top: '70%',
      left: '35%',
      width: '10vw',
      height: '10vw',
      background: '#F6CE80',
      borderRadius: '50%',
    },
    cBlue: {
      position: 'absolute',
      zIndex: -1,
      filter: 'blur(30px)',
      top: '40%',
      left: '55%',
      width: '10vw',
      height: '10vw',
      background: ' #438ba3',
      borderRadius: '50%',
    },
  };

  const variants = {
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1.05,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
    hidden: {
      opacity: 0,
      rotateX: 90,
      y: 100,
      scale: 0.99,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="media section" id="media">
      <motion.h2
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        たくさんのメディア様に
        <br className="dn-for-pc" /> ご紹介頂きました
      </motion.h2>

      <div className="media_container">
        {mediaData.map((medium) => (
          <div key={medium.id} className="media_item">
            <a href="#">
              <img src="external-link.svg" className="link_logo" />
            </a>
            <img src={medium.image} className={`item_image ${medium.className}`} />
          </div>
        ))}
      </div>

      <div className="media_comment">
        <span className="initial-quote">“</span>
        <p>
          First bite of this healthy ice cream, and I was hooked. Sweet, yet virtuous; it's my go-to guilt-free
          indulgence. Tasty and fit? Now, that's a cheat day well-spent!{' '}
        </p>
        <span className="end-quote">”</span>
      </div>

      <div style={styles.cOrange}></div>
      <div style={styles.cYellow}></div>
      <div style={styles.cPink}></div>
      <div style={styles.cBlue}></div>
    </div>
  );
}
