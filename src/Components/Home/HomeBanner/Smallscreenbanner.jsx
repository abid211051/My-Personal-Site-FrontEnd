import React, { useContext } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ToggleContext } from "../../ContextAPI/ButtonContext";
const Smallscreenbanner = () => {
  const { toggle } = useContext(ToggleContext);
  return (
    <>
      <div className="xl:hidden block sm:px-36 px-4 z-10">
        <div className="mt-10">
          <p className="text-lg text-center">
            I'm from Feni, Bangladesh, with strong expertise in React and the
            Node.js ecosystem. I enjoy having unique and meaningful
            conversations with you!
          </p>
          <ul className="flex justify-center mt-8 mb-16 gap-4">
            <li className="group">
              <a href="https://www.facebook.com/mx.pranto.9/" target="_blank">
                <AiFillFacebook
                  size={30}
                  className="group-hover:text-secondary"
                />
              </a>
            </li>
            <li className="group">
              <a href="https://www.instagram.com/a.a.pranto/" target="_blank">
                <AiFillInstagram
                  size={30}
                  className="group-hover:text-secondary"
                />
              </a>
            </li>
            <li className="group">
              <a href="" target="_blank">
                <AiOutlineLinkedin
                  size={30}
                  className="group-hover:text-secondary"
                />
              </a>
            </li>
            <li className="group">
              <a href="https://github.com/abid211051" target="_blank">
                <AiFillGithub
                  size={30}
                  className="group-hover:text-secondary"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <motion.a
              href="Resume.pdf"
              whileTap={{ scale: 0.8 }}
              className={`font-jost font-bold border-[2px]
                border-black rounded-full py-4 px-12 shado bg-white text-black cursor-pointer`}
            >
              Download CV
            </motion.a>
            <div
              className={`w-[2px] h-12 bg-black ${
                toggle ? "bg-gray-300" : "bg-black"
              }`}
            ></div>
            <div className="cursor-pointer border-b-[3px] border-blue-700 hover:border-y-yellow-600 duration-200 hover:text-secondary">
              <Link to="skill" smooth={true} duration={500}>
                <h4 className="font-bold font-jost">My SKill</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smallscreenbanner;
