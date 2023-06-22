import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { experiences } from '../constants'

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn('left', 'spring', 0.5 * experience.index, 0.75)}
    >
      <div className="max-w-5xl min-h-[230px] rounded-lg bg-tertiary flex flex-row">
        <div className="max-w-[300px] max-h-[300px] min-h-[100px] bg-black-200 flex rounded-lg m-5 justify-center items-center">
          <img
            src={experience.icon}
            alt="icon"
            className="lg:ml-5 max-w-[100px] max-h-[100px] mx-5"
          />
        </div>
        <div className="flex flex-col gap-5 m-auto">
          <div className="text-white text-[20px] font-bold text-center">
            {experience.title}
          </div>
          <div className="m-5">{experience.points}</div>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What i have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col justify-center gap-20">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.title}
            index={index}
            experience={experience}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Experience, '')
