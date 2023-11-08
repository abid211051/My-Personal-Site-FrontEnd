import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { AiFillFacebook, AiFillInstagram, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation'
import { motion, useInView } from 'framer-motion'
import { ToggleContext } from '../../ContextAPI/ButtonContext';
const Xlscreenbanner = () => {
    const { toggle } = useContext(ToggleContext)
    const ref = useRef()
    const isInview = useInView(ref)
    return (
        <>
            <motion.div
                ref={ref}
                initial={'hidden'}
                animate={isInview ? 'visible' : 'hidden'}
                variants={{
                    visible: { opacity: 1, translateX: 0, translateY: 0 },
                    hidden: { opacity: 0, translateX: -150, translateY: -150 }
                }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    translateX: {
                        type: "spring",
                        damping: 10,
                        stiffness: 80,
                        restDelta: 0.001
                    },
                    translateY: {
                        type: "spring",
                        damping: 10,
                        stiffness: 80,
                        restDelta: 0.001
                    },
                }}

                className='flex justify-center
        xl:items-center items-center xl:m-0 mt-20 z-10 '>
                <div className='xl:inline-block hidden'>
                    <div className={`flex  justify-center items-center`}>
                        <div className='flex flex-col justify-center items-center pl-4'>
                            <div className='w-7 h-7 bg-white rounded-full border-[2px] border-black'></div>
                            <div className={`w-[2px] min-h-[570px] bg-black ${toggle ? 'bg-white' : 'bg-black'}`}></div>
                            <div className='w-7 h-7 bg-white rounded-full border-[2px] border-black'></div>
                        </div>
                    </div>
                </div>
                <div className='xl:pl-8'>
                    <h4 className='text-lg font-bold xl:text-start text-center'>HELLO,
                        <span className='text-secondary'>MY NAME IS</span></h4>
                    <h1 className='sm:text-[81px] font-jost 
                        font-extrabold text-shadow
                    text-white text-[55px] text-center'>
                        <span className='text-secondary'>ABED</span> AFNAN
                    </h1>
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
                                ` Web Developer`,
                                1000,
                                ` MERN stack Developer`,
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
                            <p className='text-lg'>From Feni, Bangladesh.
                                I have a good knowledge in Web development, specially in MERN stack.
                                I love to talk with you about our unique.
                            </p>
                            <ul className='flex justify-start mt-8 mb-16 gap-8'>
                                <li className='group'>
                                    <a href="https://www.facebook.com/mx.pranto.9/" target='_blank'>
                                        <AiFillFacebook size={30} className='group-hover:text-secondary' />
                                    </a>
                                </li>
                                <li className='group'>
                                    <a href="https://www.instagram.com/a.a.pranto/" target='_blank'>
                                        <AiFillInstagram size={30} className='group-hover:text-secondary' />
                                    </a>
                                </li>
                                <li className='group'>
                                    <a href="" target='_blank'>
                                        <AiOutlineLinkedin size={30} className='group-hover:text-secondary' />
                                    </a>
                                </li>
                                <li className='group'>
                                    <a href="https://github.com/abid211051" target='_blank'>
                                        <AiFillGithub size={30} className='group-hover:text-secondary' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='flex  justify-start  items-center '>
                                <motion.a
                                    href='Resume.pdf'
                                    whileTap={{ scale: 0.8 }}
                                    className={`font-jost font-bold border-[2px]
                border-black rounded-full py-4 px-12 shado bg-white text-black cursor-pointer`}>
                                    Download CV
                                </motion.a>
                                <div className={`ml-3 w-12 h-[2px] ${toggle ? 'bg-white' : 'bg-black'}`}>

                                </div>
                                <div className='ml-12 cursor-pointer border-b-[3px] border-blue-700 hover:border-y-yellow-600 duration-200 hover:text-secondary'>
                                    <Link to='skill' smooth={true} duration={500} ><h4 className='font-bold font-jost'>My SKill</h4></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default Xlscreenbanner
