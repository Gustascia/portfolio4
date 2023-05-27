import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { technologies } from '../constants';

const TechCard = ({ icon, technology }) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.25 * technology.index, 0.75)}
      className="bg-black-200 p-10 rounded-3xl  w-[200px] h-[200px] flex justify-center items-center m-5"
    >
      <img src={icon} alt="icon" />
    </motion.div>
  );
};


const Tech = () => {
  return (
    <div className="mt-15 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Most used</p>
          <h2 className={`${styles.sectionHeadText}`}>Technology</h2>
        </motion.div>
      </div>
      <div className="p-10 rounded-2xl min-h-[300px] flex flex-wrap justify-between">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} icon={technology.icon} technology={technology} />
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(Tech, '');
