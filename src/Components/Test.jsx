import React from 'react';
import { motion } from 'framer-motion';
import Test1 from './Test1';

const Test = () => {
  const data = [
    {
      name : 'abid'
    },
    {
      name : 'afnan'
    },
    {
      name : 'pranto'
    }
  ]
  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
          <Test1 />

          <div className={`w-[2px] ${change ? 'sm:h-[18.5rem] h-[24.8rem]' : 'h-[2.9rem]'}
          ${toggle ? 'bg-white' : 'bg-black'} absolute sm:top-12 top-7 transition-all duration-300`}>
        </div>
      </div>
    </>
  );
};

export default Test;
