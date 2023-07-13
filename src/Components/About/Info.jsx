import React from 'react'

const Info = () => {
    return (
        <>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-8'>
                <div className='flex gap-2'>
                    <div className='flex flex-col items-center pt-2'>
                        <div className='w-4 h-3 bg-white rounded-full border-[2px] border-black'></div>
                        <div className='w-[2px] min-h-[70px] bg-black duration-300'></div>
                        <div className='w-3 h-3 bg-white rounded-full border-[2px] border-black'></div>
                        <div className='w-[2px] min-h-[70px] bg-black duration-300'></div>
                        <div className='w-3 h-3 bg-white rounded-full border-[2px] border-black'></div>
                        <div className='w-[2px] min-h-[70px] bg-black duration-300'></div>
                        <div className='w-3 h-3 bg-white rounded-full border-[2px] border-black'></div>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <div>
                            <h2 className='text-lg font-jost font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>BIRTHDAY</h2>
                            <p className='font-medium text-slate-600'>2 December 2001</p>
                        </div>
                        <div>
                            <h2 className='text-lg font-jost font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>AGE</h2>
                            <p className='font-medium text-slate-600'>22yr</p>
                        </div>
                        <div>
                            <h2 className='text-lg font-jost font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>NATIONALITY</h2>
                            <p className='font-medium text-slate-600'>Bangladeshi</p>
                        </div>
                        <div>
                            <h2 className='text-lg font-jost font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>ADDRESS</h2>
                            <p className='font-medium text-slate-600'>3900, Feni</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col items-center pt-2'>
                        <div className='w-4 h-3 bg-white rounded-full border-[2px] border-black'></div>
                        <div className='w-[2px] min-h-[70px] bg-black duration-300'></div>
                        <div className='w-3 h-3 bg-white rounded-full border-[2px] border-black'></div>
                        <div className='w-[2px] min-h-[70px] bg-black duration-300'></div>
                        <div className='w-3 h-3 bg-white rounded-full border-[2px] border-black'></div>
                        <div className='w-[2px] min-h-[70px] bg-black duration-300'></div>
                        <div className='w-3 h-3 bg-white rounded-full border-[2px] border-black'></div>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <div>
                            <h2 className='text-lg font-jost font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>EMAIL</h2>
                            <p className='font-medium text-slate-600'>apranto41@gmail.com</p>
                        </div>
                        <div>
                            <h2 className='text-lg font-jost font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>PHONE</h2>
                            <p className='font-medium text-slate-600'>01761929757</p>
                        </div>
                        <div>
                            <h2 className='text-lg font-jost font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>WHATSAPP</h2>
                            <p className='font-medium text-slate-600'>01761929757</p>
                        </div>
                        <div>
                            <h2 className='text-lg font-jost font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>JOB</h2>
                            <p className='font-medium text-slate-600'>N/A</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;
