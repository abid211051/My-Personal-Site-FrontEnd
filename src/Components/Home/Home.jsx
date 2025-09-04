import { useContext } from "react";
import "/src/style.css";
import Nav from "./NavBar/Nav";
import Homebanner from "./HomeBanner/Homebanner";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { ToggleContext } from "../ContextAPI/ButtonContext";
const Home = () => {
  const { toggle } = useContext(ToggleContext);
  return (
    <>
      <div
        className={`${
          toggle
            ? "bg-gradient-to-r from-zinc-800 via-zinc-950 to-slate-900 text-zinc-400"
            : "bg-primary"
        } overflow-x-hidden`}
      >
        <Nav />
        <header>
          <Homebanner />
          <About />
        </header>
        <main>
          <Portfolio />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
