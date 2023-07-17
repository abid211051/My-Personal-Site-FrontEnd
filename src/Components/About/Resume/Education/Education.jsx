import React, { useContext, useState } from 'react'
import { ToggleContext } from '../../../ContextAPI/ButtonContext';
import ResumeBlock from '../ResumeBlock';
import edudata from './EduData'

const Education = () => {
    const { toggle } = useContext(ToggleContext)
    
    return (
        <>
            <div className='flex flex-col items-center justify-start z-10'>
                <div>
                    <h1 className='sm:text-2xl text-xl font-jost font-bold'>EDUCATION</h1>
                </div>
                <div className={`w-[90%] h-[2px] ${toggle ? 'bg-gray-400' : 'bg-black'}  mt-3 mb-6`}></div>
                {edudata.map((item, i)=>(
                    <ResumeBlock key={i} item={item} i={i}/>
                ))}
            </div>
        </>
    )
}

export default Education
