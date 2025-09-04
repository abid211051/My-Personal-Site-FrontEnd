import Info from "./info/Info";
const Aboutintro = () => {
  return (
    <>
      <div className="md:col-span-2 md:flex hidden justify-center items-center">
        <div className="flex justify-center items-center bg-gray-300">
          <img
            src="/Personal_img/myimgin.jpg"
            alt=""
            className="md:w-full w-[400px] p-2"
          />
        </div>
      </div>
      <div className="md:col-span-3 flex justify-center items-center">
        <div>
          <h1 className="md:text-4xl text-3xl font-bold font-caveat pt-6 pb-3 sm:text-start text-center">
            I'M Abed Afnan
          </h1>
          <h3 className="md:text-2xl text-xl font-bold font-jost sm:text-start text-center">
            A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Full Stack{" "}
            </span>
            Web Developer From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Bangladesh
            </span>
          </h3>

          <div className="md:col-span-2 md:hidden flex justify-center items-center py-4">
            <div className="flex justify-center items-center bg-gray-300">
              <img
                src="/Personal_img/myimgin.jpg"
                alt=""
                className="md:w-full w-[400px] p-2"
              />
            </div>
          </div>

          <p className="py-6">
            I design and develop user-friendly websites, web services, and
            online stores, creating seamless digital experiences with bold
            interfaces and meaningful interactions. Check out my portfolio!
          </p>
          <Info />
        </div>
      </div>
    </>
  );
};

export default Aboutintro;
