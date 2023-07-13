import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import {Link} from 'react-scroll'
const Smallscreenbanner = () => {
  return (
    <>
      <div className='xl:hidden block sm:px-36 px-4'>
          <div className='mt-10'>
            <p className='text-slate-600 text-lg text-center'>From France, Paris.
              I have rich experience in web design, also I am good at wordpress.
              I love to talk with you about our unique.
            </p>
            <ul className='flex justify-center mt-8 mb-16 gap-4'>
              <li className='group'>
                <AiFillFacebook size={30} className='group-hover:text-secondary' />
              </li>
              <li className='group'>
                <AiFillInstagram size={30} className='group-hover:text-secondary' />
              </li>
              <li className='group'>
                <AiOutlineLinkedin size={30} className='group-hover:text-secondary' />
              </li>
            </ul>
          </div>
          <div>
            <div className='flex flex-col justify-center items-center gap-4'>
              <button className='font-jost font-bold border-[2px]
                border-black rounded-full py-4 px-12 shado bg-white hover:bg-secondary hover:text-white duration-200'>
                Download CV
              </button>
              <div className='w-[2px] h-12 bg-black'>

              </div>
              <div className='cursor-pointer border-b-[3px] border-blue-700 hover:border-y-yellow-600 duration-200 hover:text-secondary'>
                <Link to='skill' smooth={true} duration={500} ><h4 className='font-bold font-jost'>My SKill</h4></Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Smallscreenbanner;
