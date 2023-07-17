import React, { useState } from 'react'

const Test1 = () => {
  const [vv, setVv] = useState(false)
  const changestate = () => {
    setVv(!vv)
  }
  return (
    <>
      <div className='flex flex-col items-center justify-start relative'>
        <div className={`w-[2px] ${vv ? 'sm:h-[18.5rem] h-[24.8rem]' : 'h-[2.9rem]'} 
        absolute sm:bottom-12 bottom-7 transition-all duration-300 bg-black  `}>

        </div>
        <div className={`sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] border-black rounded-full border-[2px]`}>
        </div>
      </div>
      <button onClick={changestate}>hhh</button>



      <div className={`flex flex-col ${vv ? 'text-white' : 'text-black'} rounded-full justify-center items-center`}>
        <div className={`sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]
             rounded-full border-[2px] ${vv ? 'border-white' : 'border-black'}
             flex justify-center items-center sm:text-2xl text-lg`}>
          {vv ? '-' : '+'}
        </div>
      </div>
    </>
  )
}

export default Test1
