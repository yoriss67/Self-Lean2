import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Message() {
  const variants = {
    visible: (custom = 0) => ({
      opacity: 1,
      rotateX: 0,
      rotateZ: -2,
      y: 0,
      scale: 1.1,
      transition: { type: 'spring', stiffness: 50, damping: 40, delay: custom },
    }),
    hidden: {
      opacity: 0,
      rotateX: 90,
      y: 100,
      scale: 0.8,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const [refTop, inViewTop] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refMiddle, inViewMiddle] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refBottom, inViewBottom] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="message section" id="message">
      <div className="message_container">
        <div className="message_left_container">
          <div className="message_h2_container">
            <div className={`ref-top ${inViewTop ? 'true' : 'false'}`} ref={refTop}>
              <motion.h2
                variants={variants}
                initial="hidden"
                animate={inViewTop ? 'visible' : 'hidden'}
                custom={0}
              >
                高タンパク
              </motion.h2>
            </div>

            <div className={`ref-middle ${inViewMiddle ? 'true' : 'false'}`} ref={refMiddle}>
              <motion.h2
                variants={variants}
                initial="hidden"
                animate={inViewMiddle ? 'visible' : 'hidden'}
                custom={0.2}
              >
                低カロリー
              </motion.h2>
            </div>

            <div className={`ref-bottom ${inViewMiddle ? 'true' : 'false'}`} ref={refBottom}>
              <motion.h2
                variants={variants}
                initial="hidden"
                animate={inViewBottom ? 'visible' : 'hidden'}
                custom={0.5}
              >
                低脂肪
              </motion.h2>
            </div>
          </div>

          <img className="message_image" src="unsplash.jpg" alt="message_image" />
        </div>

        <div className="message_right_container">
          <p>
            <span>甘さを感じながらも健康を守りたい。</span>高タンパク低カロリー低脂肪のアイスクリームで、あなたの健康と美味しさの両立を叶えます。
          </p>
          <p>
            <span className='running_line'>美しく痩せたい、いつまでも健康でいたい。</span>そんな方々が今、タンパク質の摂取に注目しています。高タンパク低カロリー食品は、ダイエットや筋力アップ、そして健康的なライフスタイルの維持に有効とされています。
          </p>
          <p>
            <span className='running_line'>1日に必要なタンパク質を適切に摂取する</span>ことで、筋肉合成を効率的にサポートし、健康的なカラダづくりを促進します。
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
