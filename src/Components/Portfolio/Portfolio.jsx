import { useContext, useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import data from "./Projectdata";
import { motion } from "framer-motion";
import { ToggleContext } from "../ContextAPI/ButtonContext";
const Portfolio = () => {
  const { toogle } = useContext(ToggleContext);
  const [visibleData, setVisibleData] = useState(null);
  const [view, setView] = useState(6);
  useEffect(() => {
    let viewdata = [];
    for (let i = 0; i < Math.min(view, data.length); i++) {
      viewdata.push(data[i]);
    }
    setVisibleData(viewdata);
  }, [view]);
  function showmore() {
    setView((prev) => (prev >= data.length ? prev : prev + 6));
  }
  return (
    <div className="min-h-screen mt-60 py-8 relative" id="portfolio">
      <div className=" sm:mb-16 mb-12 flex flex-col justify-center items-center">
        <h1
          className="sm:text-7xl text-4xl font-bold font-jost text-center animate-text bg-gradient-to-r from-cyan-700 via-rose-600
      to-teal-500 bg-clip-text text-transparent"
        >
          PORTFOLIO
        </h1>
        <h3 className="font-caveat text-3xl font-semibold">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            Works
          </span>
        </h3>
        <div className="w-40 h-1 bg-orange-500"></div>
        <h1
          className="opacity-5 font-caveat lg:text-[400px] 
                md:text-[300px] sm:text-[250px] text-[37vw] 
                font-extrabold  lg:bottom-[370px] 
                sm:bottom-[500px] absolute text-center"
        >
          Portfolio
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center md:px-8 px-2">
        <div className="z-10 grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-12 place-items-center">
          {visibleData?.length &&
            visibleData.map((item, i) => (
              <PortfolioCard item={item} i={i} key={i} />
            ))}
        </div>
        <motion.button
          onClick={showmore}
          whileTap={{ scale: 0.8 }}
          className={`z-10 font-jost font-bold border-[2px]
                border-black rounded-full py-4 px-12 shado mt-7 bg-white text-black`}
        >
          Show More
        </motion.button>
      </div>
    </div>
  );
};

export default Portfolio;
