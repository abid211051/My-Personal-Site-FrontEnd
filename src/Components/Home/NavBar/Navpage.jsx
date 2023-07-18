import React, { useContext } from 'react';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { ImBlog } from 'react-icons/im';
import { GrProjects, GrContact } from 'react-icons/gr';
import { RiContactsBookLine } from 'react-icons/ri';
import { BsGrid1X2 } from 'react-icons/bs';
import { Link } from 'react-scroll'
import {MdOutlineLightMode, MdOutlineDarkMode} from 'react-icons/md'
import { ToggleContext } from '../../ContextAPI/ButtonContext';
const Navpage = ({ navbutton }) => {
    const {toggle, changetoggle} = useContext(ToggleContext)
    return (
        <>
            <div className={`sm:min-h-[700px] min-h-[500px] ${toggle ? 'bg-gray-800' : 'bg-white'} fixed top-0 right-0
        ${navbutton ? 'sm:w-[300px] w-[200px] opacity-100' : 'sm:w-[0px] w-[0px] opacity-0'} 
        transition-all duration-500
        rounded-s-xl flex justify-between`}
            >
                <div className={`flex  justify-center items-center font-cabin pl-4
                    ${navbutton ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col justify-center items-center sm:pr-10 pr-2'>
                        <div className='w-7 h-7 bg-gray-300 rounded-full border-[2px] border-black'></div>
                        <div className={`w-[2px] min-h-[340px] sm:min-h-[520px] ${toggle ? 'bg-gray-300' : 'bg-black'}`}></div>
                        <div className='w-7 h-7 bg-gray-300 rounded-full border-[2px] border-black'></div>
                    </div>
                    <ul className={`flex flex-col sm:gap-24 gap-16 ${navbutton ? 'block' : 'hidden'}`}>
                        <Link to='home' smooth={true} duration={500} className='sm:text-2xl text-xl font-bold flex gap-2 justify-start items-center group'>
                            <AiOutlineHome size={25} className='group-hover:text-orange-600 duration-200 cursor-pointer' />
                            <h2 className='group-hover:text-orange-600 duration-200 cursor-pointer'>HOME</h2>
                        </Link>
                        <Link to='about' smooth={true} duration={500} className='sm:text-2xl text-xl font-bold flex gap-2 justify-start items-center group'>
                            <AiOutlineInfoCircle size={25} className='group-hover:text-orange-600 duration-200 cursor-pointer' />
                            <h2 className='group-hover:text-orange-600 duration-200 cursor-pointer'>ABOUT</h2>
                        </Link>
                        <Link to='/' smooth={true} duration={500} className='sm:text-2xl text-xl font-bold flex gap-2 justify-start items-center group'>
                            <ImBlog size={25} className='group-hover:text-orange-600 duration-200 cursor-pointer' />
                            <h2 className='group-hover:text-orange-600 duration-200 cursor-pointer'>BLOG</h2>
                        </Link>
                        <Link to='portfolio' smooth={true} duration={500} className='sm:text-2xl text-xl font-bold flex gap-2 justify-start items-center group'>
                            <BsGrid1X2 size={25} className='group-hover:text-orange-600 duration-200 cursor-pointer' />
                            <h2 className='group-hover:text-orange-600 duration-200 cursor-pointer'>PORTFOLIO</h2>
                        </Link>
                        <Link to='contact' smooth={true} duration={500} className='sm:text-2xl text-xl font-bold flex gap-2 justify-start items-center group'>
                            <RiContactsBookLine size={25} className='group-hover:text-orange-600 duration-200 cursor-pointer' />
                            <h2 className='group-hover:text-orange-600 duration-200 cursor-pointer'>CONTACT</h2>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navpage;
