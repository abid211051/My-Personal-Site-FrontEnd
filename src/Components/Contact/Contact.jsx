import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <>
            <div className='min-h-screen mt-32 relative py-8' id='contact' >
                <div className='sm:mb-16 mb-12 flex flex-col justify-center items-center'>
                    <h1 className='sm:text-5xl text-3xl font-bold font-jost text-center'>CONTACT ME</h1>
                    <h3 className='font-caveat text-3xl font-semibold'>Let's <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>talk together</span></h3>
                    <div className='w-40 h-1 bg-orange-500'></div>
                </div>
                <div className='xl:inline-block hidden absolute top-12'>
                    <div className={`flex  justify-center items-center`}>
                        <div className='flex flex-col justify-center items-center pl-4'>
                            <div className='w-7 h-7 bg-white rounded-full border-[2px] border-black'></div>
                            <div className='w-[2px] min-h-[570px] bg-black duration-300'></div>
                            <div className='w-7 h-7 bg-white rounded-full border-[2px] border-black'></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-[100%] md:px-2 sm:px-14 px-2  grid md:grid-cols-2  sm:gap-6 gap-12 place-items-center'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
