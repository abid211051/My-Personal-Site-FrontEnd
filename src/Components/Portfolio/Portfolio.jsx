import React, { useEffect } from 'react'
import PortfolioCard from './PortfolioCard'
import data from './Projectdata'

const Portfolio = () => {

  return (
    <div className='min-h-screen mt-32 py-8 overflow-hidden' id='portfolio'>
      <div className='sm:mb-16 mb-12 flex flex-col justify-center items-center'>
        <h1 className='sm:text-5xl text-3xl font-bold font-jost text-center'>PORTFOLIO</h1>
        <h3 className='font-caveat text-3xl font-semibold'>My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>Works</span></h3>
        <div className='w-40 h-1 bg-orange-500'></div>
      </div>
      <div className='flex flex-col justify-center items-center md:px-8 px-2'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-12 place-items-center'>
          {data?.length && data.map((item, i)=>(
            <PortfolioCard item={item} i={i} key={i} />
          ))}
        </div>
        <button className='font-jost font-bold border-[2px]
                border-black rounded-full py-4 px-12 shado bg-white hover:bg-secondary hover:text-white duration-200 mt-8'>
          See More
        </button>
      </div>
    </div>
  )
}

export default Portfolio
