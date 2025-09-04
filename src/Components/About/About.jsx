import Aboutintro from "./Aboutintro";
import "/src/style.css";
import Education from "./Resume/Education/Education";
import Experience from "./Resume/Experience/Experience";

const About = () => {
  return (
    <>
      <div
        className="relative pt-48 px-3 flex flex-col justify-center items-center"
        id="about"
      >
        <h1
          className="sm:text-7xl text-4xl font-bold font-jost text-center animate-text bg-gradient-to-r from-cyan-700 via-rose-600
      to-teal-500 bg-clip-text text-transparent"
        >
          ABOUT
        </h1>
        <h3 className="font-caveat text-3xl font-semibold">
          Explore{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            Me
          </span>
        </h3>
        <div className="w-40 h-1 bg-orange-500"></div>
        <h1
          className="opacity-5 font-caveat lg:text-[390px] 
                md:text-[300px] sm:text-[250px] text-[43vw] 
                font-extrabold absolute text-center"
        >
          About
        </h1>
      </div>
      <div className="min-h-screen max-w-[100vw] grid md:grid-cols-5 grid-cols-1 p-4 gap-10">
        <Aboutintro />
      </div>
      <div className="min-h-screen flex flex-col  mt-48">
        <div className="relative sm:mb-16 mb-12 flex flex-col justify-center items-center">
          <h1
            className="sm:text-7xl text-4xl font-bold font-jost text-center animate-text bg-gradient-to-r from-cyan-700 via-rose-600
      to-teal-500 bg-clip-text text-transparent"
          >
            RESUME
          </h1>
          <h3 className="font-caveat text-3xl font-semibold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Story
            </span>
          </h3>
          <div className="w-40 h-1 bg-orange-500"></div>
          <h1
            className="opacity-5 font-caveat lg:text-[400px] 
                md:text-[300px] sm:text-[250px] text-[40vw] 
                font-extrabold absolute text-center"
          >
            Resume
          </h1>
        </div>
        <div
          className="grid lg:grid-cols-2 sm:px-4 sm:gap-0 gap-12 relative"
          id="skill"
        >
          <Education />
          <Experience />
        </div>
      </div>
    </>
  );
};

export default About;
