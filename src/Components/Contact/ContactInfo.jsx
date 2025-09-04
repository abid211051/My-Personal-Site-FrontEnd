import { useContext } from "react";
import { BsMap } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { ToggleContext } from "../ContextAPI/ButtonContext";
const ContactInfo = () => {
  const { toggle } = useContext(ToggleContext);
  return (
    <>
      <div className="sm:w-[80%] w-full h-full flex flex-col gap-14">
        <div className="flex sm:flex-row flex-col items-center">
          <div
            className={`w-14 h-14 rounded-full border-[2px] shado flex justify-center items-center ${
              toggle ? "border-gray-400" : "border-black"
            } `}
          >
            <BsMap size={20} />
          </div>
          <div
            className={`sm:w-10 sm:h-[2px] w-[2px] h-10 ${
              toggle ? "bg-slate-400" : "bg-black"
            }`}
          ></div>
          <div className="sm:ml-7 ml-2">
            <h2 className="text-3xl  font-bold font-caveat">Address</h2>
            <p>Feni, Bangladesh</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center">
          <div
            className={`w-14 h-14 rounded-full border-[2px] shado flex justify-center items-center ${
              toggle ? "border-gray-400" : "border-black"
            } `}
          >
            <MdOutlineEventAvailable size={25} />
          </div>
          <div
            className={`sm:w-10 sm:h-[2px] w-[2px] h-10 ${
              toggle ? "bg-slate-400" : "bg-black"
            }`}
          ></div>
          <div className="sm:ml-7 ml-2">
            <h2 className="text-3xl  font-bold font-caveat">Available</h2>
            <p>Yes</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center">
          <div
            className={`w-14 h-14 rounded-full border-[2px] shado flex justify-center items-center ${
              toggle ? "border-gray-400" : "border-black"
            } `}
          >
            <AiOutlineMail size={25} />
          </div>
          <div
            className={`sm:w-10 sm:h-[2px] w-[2px] h-10 ${
              toggle ? "bg-slate-400" : "bg-black"
            }`}
          ></div>
          <div className="sm:ml-7 ml-2">
            <h2 className="text-3xl  font-bold font-caveat">Email</h2>
            <p>apranto41@gmail.com</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center">
          <div
            className={`w-14 h-14 rounded-full border-[2px] shado flex justify-center items-center ${
              toggle ? "border-gray-400" : "border-black"
            } `}
          >
            <AiOutlinePhone size={25} />
          </div>
          <div
            className={`sm:w-10 sm:h-[2px] w-[2px] h-10 ${
              toggle ? "bg-slate-400" : "bg-black"
            }`}
          ></div>
          <div className="sm:ml-7 ml-2">
            <h2 className="text-3xl  font-bold font-caveat">Phone</h2>
            <p>+8801869018104</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
