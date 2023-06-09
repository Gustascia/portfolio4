import React from 'react'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants'

const ProjectCard = ({ index, image, name, description, gifImage }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <motion.div variants={fadeIn('down', 'spring', 0.5 * index, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary mt-10 p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="image-container">
            <img
              src={image}
              alt="image"
              className={`min-h-[220px] max-h-[200px] w-full ${
                isHovered ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-200`}
            />
            <img
              src={gifImage}
              alt="hover animation"
              className={`min-h-[220px] max-h-[200px] w-full absolute top-0 left-0 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-200`}
            />
          </div>
          <h2 className="text-white font-semibold md:text-[25px] sm:text-[20px] xs:text-[10px] text-[5px] mt-3">
            {name}
          </h2>
          <p className="mt-3 text-[15px] max-w-3xl leading-[20px]">
            {description}
          </p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3  text-[17px] max-w-3xl leading-[30px]"
        >
          These are the projects i chose as they represent my diverse skill set
          the best
        </motion.div>
      </div>
      <div className="flex flex-wrap gap-5">
        {projects.map((project, index) => (
          <ProjectCard index={index} {...project} key={project.name} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work')
