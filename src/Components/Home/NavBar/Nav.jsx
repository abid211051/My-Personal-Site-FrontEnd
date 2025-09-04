import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import "/src/style.css";
import Navpage from "./Navpage";
import { ToggleContext } from "../../ContextAPI/ButtonContext";
const Nav = () => {
  const { toggle, changetoggle } = useContext(ToggleContext);
  const [navbutton, setNavbutton] = useState(false);
  const navigatebutton = () => {
    setNavbutton(!navbutton);
  };
  return (
    <>
      <div className="absolute  min-h-[50px] px-[2vw] py-[1vh] z-20">
        <div className="">
          <h1
            className={`font-vibe sm:text-5xl text-3xl 
                    text-indigo-600`}
          >
            Abid
          </h1>
        </div>
        <div className="fixed top-1 sm:scale-100 sm:right-14 right-10 scale-80 duration-300 cursor-pointer">
          <MdOutlineLightMode
            onClick={() => changetoggle()}
            className={`${
              toggle ? "opacity-0" : "opacity-100"
            } sm:text-4xl text-3xl absolute top-0 right-0`}
          />
          <MdOutlineDarkMode
            onClick={() => changetoggle()}
            className={`${
              toggle ? "opacity-100" : "opacity-0"
            } sm:text-4xl text-3xl absolute top-0 right-0`}
          />
        </div>
        <div className="z-10 fixed top-1 right-0">
          <RiMenu2Line
            className={`sm:text-4xl text-3xl absolute top-0 right-0 ${
              navbutton ? "opacity-0" : "opacity-100"
            } 
                    transition-opacity duration-300 cursor-pointer`}
            onClick={navigatebutton}
          />
          <RxCross1
            className={`sm:text-4xl text-3xl absolute top-0 right-0 ${
              navbutton ? "opacity-100" : "opacity-0"
            } 
                    transition-opacity duration-300 cursor-pointer`}
            onClick={navigatebutton}
          />
        </div>
        <Navpage navbutton={navbutton} />
      </div>
    </>
  );
};

export default Nav;
