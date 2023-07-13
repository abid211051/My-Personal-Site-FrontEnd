import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { AiFillFacebook, AiFillInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation'
const Xlscreenbanner = () => {
    return (
        <>
            <div className='flex justify-center
        xl:items-center items-center xl:m-0 mt-20'>
                <div className='xl:inline-block hidden'>
                    <div className={`flex  justify-center items-center`}>
                        <div className='flex flex-col justify-center items-center pl-4'>
                            <div className='w-7 h-7 bg-white rounded-full border-[2px] border-black'></div>
                            <div className='w-[2px] min-h-[570px] bg-black duration-300'></div>
                            <div className='w-7 h-7 bg-white rounded-full border-[2px] border-black'></div>
                        </div>
                    </div>
                </div>
                <div className='xl:pl-8'>
                    <h4 className='text-lg font-bold xl:text-start text-center'>HELLO, <span className='text-secondary'>MY NAME IS</span></h4>
                    <h1 className='sm:text-[76px] font-jost 
          font-extrabold text-shadow
        text-white text-[55px] text-center'><span className='text-secondary'>ABED</span> AFNAN</h1>
                    <h4 className={`min-h-[50px] font-bold sm:text-4xl text-[23px] font-caveat mb-14 xl:text-start text-center`}>
                        <TypeAnimation
                            preRenderFirstString={false}
                            sequence={[
                                `I am a`,
                                1000,
                            ]}
                            wrapper="span"
                            speed={5}
                            className='inline-block'
                            repeat={1}
                            cursor={false}
                        />
                        <span> </span>
                        <TypeAnimation
                            sequence={[
                                ` Mern Stack Developer`,
                                1000,
                                ` ASP.Net Core Developer`,
                                1000
                            ]}
                            wrapper="span"
                            speed={5}
                            className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'
                            repeat={Infinity}
                        />
                    </h4>
                    <div className='xl:block hidden'>
                        <div className=''>
                            <p className='text-slate-600 text-lg'>From France, Paris.
                                I have rich experience in web design, also I am good at wordpress.
                                I love to talk with you about our unique.
                            </p>
                            <ul className='flex justify-start mt-8 mb-16 gap-4'>
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
                            <div className='flex  justify-start  items-center '>
                                <button className='font-jost font-bold border-[2px]
                border-black rounded-full py-4 px-12 shado bg-white hover:bg-secondary hover:text-white duration-200'>
                                    Download CV
                                </button>
                                <div className='w-12 h-[2px] bg-black'>

                                </div>
                                <div className='ml-12 cursor-pointer border-b-[3px] border-blue-700 hover:border-y-yellow-600 duration-200 hover:text-secondary'>
                                    <Link to='skill' smooth={true} duration={500} ><h4 className='font-bold font-jost'>My SKill</h4></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Xlscreenbanner
