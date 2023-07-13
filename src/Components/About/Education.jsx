import React, { useState } from 'react'

const Education = () => {
    const [school, setShowschool] = useState(true);
    const [college, setShowcollege] = useState(false);
    const [varsity, setShowvarsity] = useState(false);

    const showschool = () => {
        setShowschool(!school);
    }
    const showcollege = () => {
        setShowcollege(!college);
    }
    const showvarsity = () => {
        setShowvarsity(!varsity);
    }
    return (
        <>
            <div className='flex flex-col items-center justify-start'>
                <div>
                    <h1 className='sm:text-2xl text-xl font-jost font-bold'>EDUCATION</h1>
                </div>
                <div className='w-[90%] h-[2px] bg-black mt-3 mb-6'></div>

                <div onClick={showschool} className='flex flex-col p-2 w-full cursor-pointer'>
                    <h1 className='sm:text-xl text-lg font-jost font-bold'>School</h1>
                    <div className={`${school ? 'sm:h-[250px] h-[350px]' : 'h-0'} 
            transition-all duration-300 overflow-hidden sm:pr-7 pr-4 flex flex-col justify-start`}>
                        <div className='my-4'>
                            <div className='sm:flex justify-between sm:p-0 pb-4 gap-8'>
                                <h3 className='sm:text-2xl text-xl font-bold font-caveat'>KG School</h3>
                                <p className='sm:text-2xl text-xl font-bold font-caveat'>2007 - 2012</p>
                            </div>
                            <p className='sm:text-base text-sm font-bold'>Dhoon Shadda Bright Kinder Garten</p>
                        </div>
                        <div className='my-8'>
                            <div className='sm:flex justify-between sm:p-0 pb-4 gap-8'>
                                <h3 className='sm:text-2xl text-xl font-bold font-caveat'>High School</h3>
                                <p className='sm:text-2xl text-xl font-bold font-caveat'>2012 - 2017</p>
                            </div>
                            <p className='sm:text-base text-sm font-bold'>Feni Govt. Pilot High School</p>
                        </div>
                    </div>
                    <div className='flex relative justify-center items-center'>
                        <div className='w-full h-[2px] bg-black'></div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]
                             rounded-full border-[2px] border-black 
                             flex justify-center items-center sm:text-2xl text-lg'>
                                {school ? '-' : '+'}
                            </div>
                            <div className={`w-[2px] ${college ? 'sm:h-[18.5rem] h-[24.8rem]' : 'h-[2.9rem]'}
                             bg-black absolute sm:top-12 top-7 transition-all duration-300`}></div>
                        </div>
                    </div>
                </div>
                <div onClick={showcollege} className='flex flex-col p-2 w-full cursor-pointer'>
                    <h1 className='sm:text-xl text-lg font-jost font-bold'>College</h1>
                    <div className={`${college ? 'sm:h-[250px] h-[350px]' : 'h-0'} 
            transition-all duration-300 overflow-hidden sm:pr-7 pr-4 flex flex-col justify-start`}>
                        <div className='my-4'>
                            <div className='sm:flex justify-between sm:p-0 pb-4 gap-8'>
                                <h3 className='sm:text-2xl text-xl font-bold font-caveat'>HSC</h3>
                                <p className='sm:text-2xl text-xl font-bold font-caveat'>2017 - 2019</p>
                            </div>
                            <p className='sm:text-base text-sm font-bold'>Mohipal Govt. College, Feni</p>
                        </div>
                    </div>
                    <div className='flex relative justify-center items-center'>
                        <div className='w-full h-[2px] bg-black'></div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]
                             rounded-full border-[2px] border-black 
                             flex justify-center items-center sm:text-2xl text-lg'>
                                {college ? '-' : '+'}
                            </div>
                            <div className={`w-[2px] ${varsity ? 'sm:h-[18.5rem] h-[24.8rem]' : 'h-[2.9rem]'}
                             bg-black absolute sm:top-12 top-7 transition-all duration-300`}></div>
                        </div>
                    </div>
                </div>
                <div onClick={showvarsity} className='flex flex-col p-2 w-full cursor-pointer'>
                    <h1 className='sm:text-xl text-lg font-jost font-bold'>University</h1>
                    <div className={`${varsity ? 'sm:h-[250px] h-[350px]' : 'h-0'} 
            transition-all duration-300 overflow-hidden sm:pr-7 pr-4 flex flex-col justify-start`}>
                        <div className='my-4'>
                            <div className='sm:flex justify-between sm:p-0 pb-4 gap-8'>
                                <h3 className='sm:text-2xl text-xl font-bold font-caveat'>BSC in CSE</h3>
                                <p className='sm:text-2xl text-xl font-bold font-caveat'>2021 - Present</p>
                            </div>
                            <p className='sm:text-base text-sm font-bold'>Internationl Islamic University, Chittagong</p>
                        </div>
                    </div>
                    <div className='flex relative justify-center items-center'>
                        <div className='w-full h-[2px] bg-black'></div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]
                             rounded-full border-[2px] border-black 
                             flex justify-center items-center sm:text-2xl text-lg'>
                                {varsity ? '-' : '+'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
