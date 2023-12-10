import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Nutrition() {
  const title = {
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
      x: 100,
      y: 10,
      scale: 0.9,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const fadeIn = {
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 90,
      scale: 1,

      // transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.4,
      // transition: { type: 'spring', stiffness: 50, damping: 20 },
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
          variants={title}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          // style={{ transformStyle: 'preserve-3d' }}
        >
          Nutrition
        </motion.h2>

        <div className="nutrition_items_container ">

          <div className="title_container">
            
            <div className="nutrition_item">
              <h3 className="title">エネルギー</h3><span className="value">93kcal</span>
            </div>
            <div className="nutrition_item">
              <h3 className="title">たんぱく質</h3><span className="value">10.3g</span>
            </div>
            <div className="nutrition_item">
              <h3 className="title">脂質</h3><span className="value">1.2g</span>
            </div>

            <div className="nutrition_item">
              <h3 className="title">食塩相当量</h3><span className="value">0.12g</span>
            </div>
            
            <div className="nutrition_item carb">
              <div className="carb">
                <h3 className="title"> 炭水化物</h3><span className="value">10.5g</span>
              </div>

              <div className="sugar">-糖質<span className="value">2.3g</span></div>
              <div className="fiber">-食物繊維<span className="value">8.2g</span></div>
            </div>

          </div>

          <motion.div
            ref={fadeRef}
            variants={fadeIn}
            animate={fadeInView ? 'visible' : 'hidden'}
            transition={{ duration: 1, ease: 'easeOut' }}
            // style={{ transformStyle: 'preserve-3d' }}
          >
            <img className="nutrition_image" src="2d-ice.png" alt="2d-ice" />
          </motion.div>
        </div>

        <div className="nutrition_comment">
          <p>
            内容量：141g 　種類別名称：発酵乳 無脂乳固形分：15.5% 　乳脂肪分：0.2%
          </p>
          <p>
            原材料名
            ：低脂肪乳製品（国内製造、オーストラリア製造）、食物繊維（ポリデキストロース）、プロテインパウダー、エリスリトール、ステビア、乳等を主要原料とする食品、卵黄パウダー、食塩、バニラビーンズシード／香料、乳化剤、安定剤（増粘多糖類）、調味料(アミノ酸等)、カロチン色素（一部に卵・乳成分を含む）
          </p>
          <p>
            原材料に含まれるアレルギー物質（28品目中）：卵・乳成分
          </p>
        </div>
      </div>
    </div>
  );
}
