import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ToggleContext } from "../../ContextAPI/ButtonContext";
const InfoBarAnim = ({ item, index }) => {
  const { toggle } = useContext(ToggleContext);
  const ref = useRef();
  const isInview = useInView(ref);
  return (
    <>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={isInview ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, scale: 1, translateX: 0 },
          hidden: { opacity: 0, scale: 0, translateX: 90 },
        }}
        transition={{
          ease: "linear",
          duration: 0.3,
          delay: index * 0.5,
          translateX: {
            type: "spring",
            stiffness: 80,
          },
        }}
        className="flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <motion.div
            className={`${
              index === 0 ? "rounded-none" : "rounded-full"
            } w-[15px] h-[15px] bg-white border-[2px] border-black`}
          ></motion.div>
          <motion.div
            className={`w-[2px] min-h-[70px] ${
              toggle ? "bg-gray-300" : "bg-black"
            }`}
          ></motion.div>
        </div>
        <div>
          <h2 className="text-lg font-jost font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            {item.event}
          </h2>
          <p className="font-medium">{item.value}</p>
        </div>
      </motion.div>
    </>
  );
};

export default InfoBarAnim;
