import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


const PortfolioCard = ({ item, i }) => {
    const ref = useRef(null);
    const isInview1 = useInView(ref, {once : true})
    return (
        <>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInview1 ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, translateX: -50, translateY: -50},
                    visible: {
                        opacity: 1, translateX: 0, translateY: 0,
                        transition: { duration: 0.7, delay: i * 0.5 }
                    }

                }}
                className='relative overflow-hidden group p-2 bg-gray-300'>
                <img src={item.img} alt="" className='w-full h-full' />
                <div className='backdrop-blur-lg  duration-200 
                absolute top-0 -left-[100%] group-hover:left-0 gap-5
                w-full h-full text-orange-600 flex justify-center items-center flex-col'>
                    <h3 className='sm:text-4xl text-xl'>{item.title}</h3>
                    <a href={item.path} target='_blank'>
                        <button className='p-2 font-caveat sm:text-4xl text-xl border-[2px] border-indigo-600'>Show Live</button>
                    </a>

                </div>
            </motion.div>
        </>
    )
}

export default PortfolioCard
