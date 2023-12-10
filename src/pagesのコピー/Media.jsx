import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import mediaData from '../data/mediaData.json';

// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Parallax from './/Parallax';

export default function Media() {
  // https://codepen.io/lokesh/pen/PMyajg?editors=1100
  const styles = {
    // card: {
    //   overflow: 'hidden',
    //   position: 'absolute',
    //   width: '100vw',
    //   height: '100%',
    //   borderRadius: 8,
    //   // boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.1), inset 0 0 0 2px rgba(0, 0, 0, 0.15)',
    //   transformOrigin: '160px 100px',
    //   zIndex: -1,
    // },
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
      // background: '#F59285',
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
      // background: '#F6A380',
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

  // const variants = {
  //   visible: {
  //     opacity: 1,
  //     rotateX: 0,
  //     // rotateZ: 1,
  //     x: 0,
  //     y: 0,
  //     scale: 1.1,
  //     transition: { type: 'spring', stiffness: 50, damping: 40 },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     rotateX: 90,
  //     x: -100,
  //     y: 10,
  //     scale: 0.9,
  //     transition: { type: 'spring', stiffness: 50, damping: 20 },
  //   },
  // };

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
    // <ParallaxProvider>
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
            <img key={medium.id} src={medium.image} className={`item_image ${medium.className}`} />
          </div>
          // <div className="media_item">
          //   <a href="#">
          //     <img src="external-link.svg" className="link_logo" />
          //   </a>
          //   <img src="TAZIZAN.png" className="item_image tazizan" />
          // </div>
          // <div className="media_item">
          //   <a href="#">
          //     <img src="external-link.svg" className="link_logo" />
          //   </a>
          //   <img src="TEITAN.png" className="item_image teitan" />
          // </div>
          // <div className="media_item">

          //     <img src="external-link.svg" className="link_logo" />
          //     {/* <svg  className="link_logo" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#4b4949">
          //       <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          //       <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          //       <g id="SVGRepo_iconCarrier">
          //         {' '}
          //         <path
          //           fill="none"
          //           fillRule="evenodd"
          //           d="M18.885 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586L9.178 9.293a1 1 0 101.414 1.414l6.293-6.293V8a1 1 0 102 0V2zM3.009 3a2.012 2.012 0 00-1.998 2.218c.148 1.453.374 3.978.374 5.782 0 1.746-.212 4.17-.36 5.642a2.028 2.028 0 002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226 5.782.374a2.012 2.012 0 002.218-1.998V12a1 1 0 10-2 0v4.878l-.003.003a.018.018 0 01-.006.003h-.006c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37h-.008a.034.034 0 01-.012-.008.033.033 0 01-.008-.012.01.01 0 010-.002v-.006c.148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985v-.006l.004-.006A.016.016 0 013.007 5h4.878a1 1 0 000-2H3.009z"
          //         ></path>
          //         <a href="#"></a>
          //       </g>
          //     </svg> */}

          //   <img src="IROIRO.png" className="item_image keizai" />
          // </div>
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

      {/* <Parallax y={[-20, 20]} tagOuter="figure">
          <div style={styles.cOrange}></div>
        </Parallax>

        <Parallax y={[-20, 20]} tagOuter="figure">
          <div style={styles.cYellow}></div>
        </Parallax>
        <Parallax y={[-20, 20]} tagOuter="figure">
          <div style={styles.cPink}></div>
        </Parallax>
        <Parallax y={[-20, 20]} tagOuter="figure">
          <div style={styles.cBlue}></div>
        </Parallax> */}
      {/* <div className="card" style={styles.card}> */}

      {/* <Parallax offset={10}>
        <div className="abstract_bg" style={styles.cOrange}></div>
      </Parallax>
      <Parallax offset={10}>
        <div className="abstract_bg" style={styles.cYellow}></div>
      </Parallax>
      <Parallax offset={10}>
        <div className="abstract_bg" style={styles.cPink}></div>
      </Parallax>
      <Parallax offset={10}>
        <div className="abstract_bg" style={styles.cBlue}></div>
      </Parallax> */}

      <div style={styles.cOrange}></div>

      <div style={styles.cYellow}></div>

      <div style={styles.cPink}></div>

      <div style={styles.cBlue}></div>
    </div>
    // </div>
    // </ParallaxProvider>
  );
}
