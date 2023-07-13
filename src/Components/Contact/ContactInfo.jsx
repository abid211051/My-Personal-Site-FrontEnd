import React from 'react'
import { BsMap } from 'react-icons/bs'
import { MdOutlineEventAvailable } from 'react-icons/md'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
const ContactInfo = () => {
  return (
    <>
      <div className='sm:w-[80%] w-full h-full flex flex-col gap-14'>
          <div className='flex sm:flex-row flex-col items-center'>
            <div className='w-14 h-14 rounded-full border-[2px] shado flex justify-center items-center border-black bg-white'>
              <BsMap size={20} />
            </div>
            <div className='sm:w-10 sm:h-[2px] w-[2px] h-10 bg-black'></div>
            <div className='sm:ml-7 ml-2'>
              <h2 className='text-3xl  font-bold font-caveat'>Address</h2>
              <p>Feni, Bangladesh</p>
            </div>
          </div>
          <div className='flex sm:flex-row flex-col items-center'>
            <div className='w-14 h-14 rounded-full border-[2px] shado flex justify-center items-center border-black bg-white'>
              <MdOutlineEventAvailable size={25} />
            </div>
            <div className='sm:w-10 sm:h-[2px] w-[2px] h-10 bg-black'></div>
            <div className='sm:ml-7 ml-2'>
              <h2 className='text-3xl  font-bold font-caveat'>Available</h2>
              <p>Yes</p>
            </div>
          </div>
          <div className='flex sm:flex-row flex-col items-center'>
            <div className='w-14 h-14 rounded-full border-[2px] shado flex justify-center items-center border-black bg-white'>
              <AiOutlineMail size={25} />
            </div>
            <div className='sm:w-10 sm:h-[2px] w-[2px] h-10 bg-black'></div>
            <div className='sm:ml-7 ml-2'>
              <h2 className='text-3xl  font-bold font-caveat'>Email</h2>
              <p>apranto41@gmail.com</p>
            </div>
          </div>
          <div className='flex sm:flex-row flex-col items-center'>
            <div className='w-14 h-14 rounded-full border-[2px] shado flex justify-center items-center border-black bg-white'>
              <AiOutlinePhone size={25} />
            </div>
            <div className='sm:w-10 sm:h-[2px] w-[2px] h-10 bg-black'></div>
            <div className='sm:ml-7 ml-2'>
              <h2 className='text-3xl  font-bold font-caveat'>Phone</h2>
              <p>+8801761929757</p>
            </div>
          </div>

        </div>
    </>
  )
}

export default ContactInfo
