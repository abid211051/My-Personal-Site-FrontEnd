import React, { useState } from 'react'
import Aboutintro from './Aboutintro';
import '/src/style.css';
import Education from './Education';
import Experience from './Experience';
const About = () => {

  return (
    <>
      <div className='pt-10 px-3 flex flex-col justify-center items-center bg-primary' id='about'>
        <h1 className='sm:text-5xl text-3xl font-bold font-jost text-center'>ABOUT ME</h1>
        <div className='w-40 h-1 bg-orange-500'></div>
      </div>
      <div className='min-h-screen max-w-[100vw] grid md:grid-cols-5 grid-cols-1 p-4 gap-10 bg-primary'>
        <Aboutintro />
      </div>
      <div className='min-h-screen flex flex-col  mt-16'>
        <div className='sm:mb-16 mb-12 flex flex-col justify-center items-center'>
          <h1 className='sm:text-5xl text-3xl font-bold font-jost text-center'>RESUME</h1>
          <h3 className='font-caveat text-3xl font-semibold'>My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>Story</span></h3>
          <div className='w-40 h-1 bg-orange-500'></div>
        </div>
        <div className='grid lg:grid-cols-2 sm:px-4 sm:gap-0 gap-12' id='skill'>
          <Education />
          <Experience />
        </div>
      </div>

    </>
  )
}

export default About;
