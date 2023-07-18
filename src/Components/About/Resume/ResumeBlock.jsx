import React, { useContext, useState } from 'react'
import { ToggleContext } from '../../ContextAPI/ButtonContext';

const ResumeBlock = ({ item, i }) => {
    const { toggle } = useContext(ToggleContext)
    const [change, setChange] = useState(false)
    const [firstone, setFirstone] = useState(true)
    const handlechage = () => {
        setChange(!change)
        setFirstone(!firstone)
    }

    return (
        <>
            <div onClick={handlechage} className='flex flex-col p-2 w-full cursor-pointer'>
                <h1 className='sm:text-xl text-lg font-jost font-bold'>{item.name}</h1>
                <div className={`${i===0 && firstone || i!==0 && change ? 'sm:h-[250px] h-[350px]' : 'h-0'} 
            transition-all duration-300 overflow-hidden sm:pr-7 pr-4 flex flex-col justify-start`}>
                    <div className='my-4'>
                        <div className='sm:flex justify-between sm:p-0 pb-4 gap-8'>
                            <h3 className='sm:text-2xl text-xl font-bold font-caveat'>
                                {item.block === 'edu' ? item.major : item.tagone}
                            </h3>
                            <p className='sm:text-2xl text-xl font-bold font-caveat'>
                                {item.block === 'edu' ? item.year : item.skilloryearone}
                            </p>
                        </div>
                        <p className='sm:text-base text-sm font-bold'>
                            {item.block === 'edu' ? item.inistitute : item.firstmessage} 
                        </p>
                    </div>
                    <div className='my-8'>
                        <div className='sm:flex justify-between sm:p-0 pb-4 gap-8'>
                            <h3 className='sm:text-2xl text-xl font-bold font-caveat'>
                                {item.block === 'edu' ? '' : item.tagtwo}
                            </h3>
                            <p className='sm:text-2xl text-xl font-bold font-caveat'>
                                {item.block === 'edu' ? '' : item.skilloryeartwo}
                            </p>
                        </div>
                        <p className='sm:text-base text-sm font-bold'>
                            {item.block === 'edu' ? '' : item.secmessage}
                        </p>
                    </div>
                </div>
                <div className='flex relative justify-center items-center'>
                    <div className={`w-full h-[2px] ${toggle ? 'bg-gray-400' : 'bg-black'}`}></div>
                    <div className='flex flex-col items-center justify-start relative'>
                        {
                            i !== 0 && <div className={`w-[2px] ${change ? 'sm:h-[18.5rem] h-[24.8rem]' : 'h-[2.9rem]'} 
                            absolute sm:bottom-12 bottom-7 transition-all duration-300
                            ${toggle ? 'bg-gray-400' : 'bg-black'}`}>
                            </div>
                        }
                        <div className={`sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] ${toggle ? 'border-gray-400' : 'border-black'}
                         rounded-full border-[2px] flex justify-center items-center sm:text-2xl text-lg`}>
                            {i===0 && firstone || i!==0 && change ? '-' : '+'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumeBlock
