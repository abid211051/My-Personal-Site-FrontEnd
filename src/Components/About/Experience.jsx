import React, { useState } from 'react'

const Experience = () => {
    const [frontend, setShowfrontend] = useState(true);
    const [backend, setShowbackend] = useState(false);
    const [mern, setShowmern] = useState(false);


    const frontendDev = () => {
        setShowfrontend(!frontend);
    }
    const backendDev = () => {
        setShowbackend(!backend);
    }
    const MERN = () => {
        setShowmern(!mern);
    }
    return (
        <>
            <div className='flex flex-col items-center justify-start'>
                <div>
                    <h1 className='sm:text-2xl text-xl font-jost font-bold'>SKILLS</h1>
                </div>
                <div className='w-[90%] h-[2px] bg-black mt-3 mb-6'></div>
                <div onClick={frontendDev} className='flex flex-col p-2 w-full cursor-pointer'>
                    <h1 className='sm:text-xl text-lg font-jost font-bold'>Frontend Developer</h1>
                    <div className={`${frontend ? 'sm:h-[250px] h-[350px]' : 'h-0'} 
            transition-all duration-300 overflow-hidden sm:pr-7 pr-4 flex flex-col justify-start`}>
                        <div className='my-4'>
                            <div className='sm:flex justify-between sm:p-0 pb-4'>
                                <h3 className='sm:text-2xl text-xl font-bold font-caveat'>Languages</h3>
                                <p className='sm:text-2xl text-xl font-bold font-caveat'>C C++ JavaScript</p>
                            </div>
                            <p className='sm:text-base text-sm font-bold'>I have good knowledge in these Languages, including DSA</p>
                        </div>
                        <div className='my-4'>
                            <div className='sm:flex justify-between sm:p-0 pb-4 gap-8'>
                                <h3 className='sm:text-2xl text-xl font-bold font-caveat'>Framework/Library</h3>
                                <p className='sm:text-2xl text-xl font-bold font-caveat'>Tailwind, React</p>
                            </div>
                            <p className='sm:text-base text-sm font-bold'>I can write code with these most popular Frameworks</p>
                        </div>
                    </div>
                    <div className='flex relative justify-center items-center'>
                        <div className='w-full h-[2px] bg-black'></div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]
                             rounded-full border-[2px] border-black 
                             flex justify-center items-center sm:text-2xl text-lg'>
                                {frontend ? '-' : '+'}
                            </div>
                            <div className={`w-[2px] ${backend ? 'sm:h-[18.5rem] h-[24.8rem]' : 'h-[2.9rem]'}
                             bg-black absolute sm:top-12 top-7 transition-all duration-300`}></div>
                        </div>
                    </div>
                </div>
                <div onClick={backendDev} className='flex flex-col p-2 w-full cursor-pointer'>
                    <h1 className='sm:text-xl text-lg font-jost font-bold'>Backend Developer</h1>
                    <div className={`${backend ? 'sm:h-[250px] h-[350px]' : 'h-0'} 
            transition-all duration-300 overflow-hidden sm:pr-7 pr-4 flex flex-col justify-start`}>
                        <div className='my-4'>
                            <div className='sm:flex justify-between sm:p-0 pb-4'>
                                <h3 className='sm:text-2xl text-xl font-bold font-caveat'>Languages</h3>
                                <p className='sm:text-2xl text-xl font-bold font-caveat'>JavaScript</p>
                            </div>
                            <p className='sm:text-base text-sm font-bold'>Currently, I can write Backend Code with JS.</p>
                        </div>
                        <div className='my-4'>
                            <div className='sm:flex justify-between sm:p-0 pb-4 gap-8'>
                                <h3 className='sm:text-2xl text-xl font-bold font-caveat'>Framework/Library</h3>
                                <p className='sm:text-2xl text-xl font-bold font-caveat'>ExpressJS, Mongoose</p>
                            </div>
                            <p className='sm:text-base text-sm font-bold'>I can write server side code with ExpressJS. And Data handeling with MongoDB</p>
                        </div>
                    </div>
                    <div className='flex relative justify-center items-center'>
                        <div className='w-full h-[2px] bg-black'></div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]
                             rounded-full border-[2px] border-black 
                             flex justify-center items-center sm:text-2xl text-lg'>
                                {backend ? '-' : '+'}
                            </div>
                            <div className={`w-[2px] ${mern ? 'sm:h-[18.5rem] h-[24.8rem]' : 'h-[2.9rem]'}
                             bg-black absolute sm:top-12 top-7 transition-all duration-300`}></div>
                        </div>
                    </div>
                </div>
                <div onClick={MERN} className='flex flex-col p-2 w-full cursor-pointer'>
                    <h1 className='sm:text-xl text-lg font-jost font-bold'>Full Stack Developer</h1>
                    <div className={`${mern ? 'sm:h-[250px] h-[350px]' : 'h-0'} 
            transition-all duration-300 overflow-hidden sm:pr-7 pr-4 flex flex-col justify-start`}>
                        <div className='my-4'>
                            <div className='sm:flex justify-between sm:p-0 pb-4 gap-8'>
                                <h3 className='sm:text-2xl text-xl font-bold font-caveat'>MERN Stack Developer</h3>
                                <p className='sm:text-2xl text-xl font-bold font-caveat'>2023 - Present</p>
                            </div>
                            <p className='sm:text-base text-sm font-bold'>I can create User friendly web application With React, Express and MongoDB
                            </p>
                        </div>
                    </div>
                    <div className='flex relative justify-center items-center'>
                        <div className='w-full h-[2px] bg-black'></div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]
                             rounded-full border-[2px] border-black 
                             flex justify-center items-center sm:text-2xl text-lg'>
                                {mern ? '-' : '+'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Experience
