import { useRef } from "react";
import "/src/style.css";
import Xlscreenbanner from "./Xlscreenbanner";
import Smallscreenbanner from "./Smallscreenbanner";
import { motion, useInView } from "framer-motion";

const Homebanner = () => {
  const ref = useRef();
  const isInview = useInView(ref);
  return (
    <>
      <div
        className="relative overflow-hidden min-h-screen grid xl:grid-cols-2 grid-cols-1"
        id="home"
      >
        <h1
          className="opacity-5 font-caveat lg:text-[390px] 
                        md:text-[300px] sm:text-[250px] text-[37vw] 
                        font-extrabold absolute top-7 xl:left-3"
        >
          Welcome
        </h1>
        <Xlscreenbanner />
        <motion.div
          ref={ref}
          initial={"hidden"}
          animate={isInview ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              translateX: 0,
              translateY: 0,
              transition: {
                duration: 0.3,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
                translateX: {
                  type: "spring",
                  damping: 10,
                  stiffness: 80,
                  restDelta: 0.001,
                },
                translateY: {
                  type: "spring",
                  damping: 10,
                  stiffness: 80,
                  restDelta: 0.001,
                },
              },
            },
            hidden: { opacity: 0, translateX: 150, translateY: -150 },
          }}
          className="flex justify-center items-center z-10"
        >
          <div
            className="overflow-hidden md:w-[600px] md:h-[600px]
              w-[500px] relative rounded-full flex
              items-end justify-center transition-all duration-500"
          >
            <div
              className="w-[100%] h-[100%]
              absolute  -bottom-2 animate-bganim bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
                from-rose-600 via-secondary to-red-800 rounded-full "
            ></div>
            <img
              src="/Personal_img/gemini.png"
              alt=""
              className="h-[75%] z-10 object-cover"
            />
          </div>
        </motion.div>
        <Smallscreenbanner />
      </div>
    </>
  );
};

export default Homebanner;
