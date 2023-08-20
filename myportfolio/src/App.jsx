import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Notes from './components/notes/Notes'

const App = () => {
  return (
    <>
    <Home />
    <Notes/>
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App