import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <>
    <Home />
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Contact />
    {/* <Footer /> */}
    </>
  )
}

export default App