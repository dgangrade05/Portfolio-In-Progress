import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {SiAboutdotme} from 'react-icons/si'
import {RxRocket} from 'react-icons/rx'
import {HiOutlineSparkles} from 'react-icons/hi'
import {HiOutlineMail} from 'react-icons/hi'

const Nav = () => {
  return (
    <nav>
      <a href='#home'id='element' name='home'><GoHome /></a>
      <a href='#about' id='element' name='about'><SiAboutdotme /></a>
      <a href='#experience' id='element' name='experience'><RxRocket /></a>
      <a href='#projects' id='element' name='projects'><HiOutlineSparkles /></a>
      <a href='#contact' id='element' name='contact'><HiOutlineMail /></a>
    </nav>
  )
}

export default Nav