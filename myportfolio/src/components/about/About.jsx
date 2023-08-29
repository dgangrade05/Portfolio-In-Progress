import React from 'react'
import './about.css'
import ME from '../../assets/pfp.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>
        --- About ---
      </h5>
      <div className='about-container'>
        <div className='about-me'>
          <div  className='about-image'>
            <img src={ME} alt='Profile'></img>
          </div>
        </div>
        <div className='about-content'>

        </div>
      </div>
    </section>
  )
}

export default About