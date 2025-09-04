import ContactForm from "./ContactForm";
import { useContext } from "react";
import { ToggleContext } from "../ContextAPI/ButtonContext";
const Contact = () => {
  const { toggle } = useContext(ToggleContext);
  return (
    <>
      <div className="min-h-screen mt-60 relative py-8" id="contact">
        <div className="sm:mb-16 mb-12 flex flex-col justify-center items-center">
          <h1
            className="sm:text-7xl text-4xl font-bold font-jost text-center animate-text bg-gradient-to-r from-cyan-700 via-rose-600
      to-teal-500 bg-clip-text text-transparent"
          >
            CONTACT
          </h1>
          <h3 className="font-caveat text-3xl font-semibold">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              talk together
            </span>
          </h3>
          <div className="w-40 h-1 bg-orange-500"></div>
          <h1
            className="opacity-5 font-caveat lg:text-[400px] 
                        md:text-[300px] sm:text-[250px] text-[38vw] 
                        font-extrabold absolute text-center"
          >
            Contact
          </h1>
        </div>
        <div className="xl:inline-block hidden absolute top-12">
          <div className={`flex  justify-center items-center`}>
            <div className="flex flex-col justify-center items-center pl-4">
              <div className="w-7 h-7 bg-white rounded-full border-[2px] border-black"></div>
              <div
                className={`w-[2px] ${
                  toggle ? "bg-white" : "bg-black"
                } min-h-[570px]`}
              ></div>
              <div className="w-7 h-7 bg-white rounded-full border-[2px] border-black"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="z-10 w-[100%] md:px-2 sm:px-14 px-2  grid md:grid-cols-2  sm:gap-6 gap-12 place-items-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
