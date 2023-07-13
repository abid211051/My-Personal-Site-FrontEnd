import React from 'react'
import '/src/style.css';
import Nav from './NavBar/Nav';
import Homebanner from './HomeBanner/Homebanner';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
      <Nav />
      <header>
        <Homebanner />
        <About />
      </header>
      <main className='bg-primary'>
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
