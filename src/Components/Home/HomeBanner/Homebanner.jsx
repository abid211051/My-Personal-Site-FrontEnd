import React, { useRef } from 'react';
import '/src/style.css';
import Xlscreenbanner from './Xlscreenbanner';
import Smallscreenbanner from './Smallscreenbanner';
import { inView, motion, useInView } from 'framer-motion'

const Homebanner = () => {
  const ref = useRef();
  const isInview = useInView(ref)
  return (
    <>
      <div className='overflow-hidden min-h-screen grid xl:grid-cols-2 grid-cols-1 bg-primary' id='home'>
        <Xlscreenbanner />
        <motion.div
        ref={ref}
        initial={'hidden'}
        animate={isInview ? 'visible' : 'hidden'}
        variants={{
          visible : {opacity : 1, translateX : 0},
          hidden : {opacity : 0, translateX : 500}
        }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          translateX: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        className='flex justify-center items-center'>
          <div className='overflow-hidden md:w-[700px] md:h-[700px]
              w-[550px] relative rounded-full flex
              items-end justify-center transition-all duration-500' >
            <div className='w-[90%] h-[85%]
              absolute  -bottom-2 bg-secondary 
              rounded-full'>
            </div>
            <img src="/Personal_img/Myremovebg.png" alt=""
              className='w-[100%] z-10 object-cover' />
          </div>
        </motion.div>
        <Smallscreenbanner />
      </div>
    </>
  )
}

export default Homebanner
