import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { RiMenu2Line } from 'react-icons/ri';
import '/src/style.css'
import Navpage from './Navpage';
const Nav = () => {
    const [navbutton, setNavbutton] = useState(false);
    const [name, setName] = useState(true);
    const navigatebutton = () => {
        setNavbutton(!navbutton);
    }

    const hidename = () =>{
       if(window.scrollY > 0){
        return setName(false)
       }else{
        setName(true)
       }
    }
    useEffect(()=>{
        window.addEventListener('scroll', hidename);
    },[])
    return (
        <>
            <div 
            className='flex justify-between w-[100vw] min-h-[50px]
             fixed top-0 left-0 px-[2vw] py-[1vh] z-20'>
                <div>
                    <h1 className={`${name ? 'opacity-100' : 'opacity-0'} 
                    font-caveat sm:text-5xl text-3xl duration-200 
                    text-indigo-600`}
                    >ABID</h1>
                </div>
                <div className='relative z-10'>
                    <RiMenu2Line size={35}
                        className={`absolute top-2 right-0 ${navbutton ? 'opacity-0' : 'opacity-100'} 
                    transition-opacity duration-300 cursor-pointer`}
                        onClick={navigatebutton}
                    />
                    <RxCross1 size={35}
                        className={`absolute top-2 right-0 ${navbutton ? 'opacity-100' : 'opacity-0'} 
                    transition-opacity duration-300 cursor-pointer`}
                        onClick={navigatebutton}
                    />
                </div>
                <Navpage navbutton={navbutton} />
            </div>
        </>
    )
}

export default Nav;
