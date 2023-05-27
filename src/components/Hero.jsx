import { motion } from 'framer-motion'
import { styles } from '../styles'
import { gusto, illustration1, illustration2 } from '../assets'
import { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion"
import React from 'react'


const Hero = () => {
  return (
    <section className=' w-full  flex flex-wrap mt-20 '>
      <div className={`  max-w-7xl flex flex-row items-start gap-5 `}>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#F9C784]'>Gustas</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white `}>
            <br className='sm:block hidden'/> A freelance Full-Stack developer <br></br> at your service
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <img src={gusto} alt="gusto photo" className='max-w-[300px] rounded-full aspect-auto m-4 '  />
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 860px) {
          .flex-row {
            flex-direction: column;
            justify-content: center;
            align-items:center;
          }
        }
      `}</style>
      <div className='max-w-5xl  flex justify-between gap-20 '>
        <motion.div variants={slideIn('left',"tween",0.2,1)}>
          <img src={illustration2} alt="illustration" className='w-full h-full object-contain' />
        </motion.div>
        <motion.div variants={slideIn('right',"tween",0.2,1)}>
          <img src={illustration1} alt="illustration" className='w-full h-full object-contain' />
        </motion.div>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero,"")
