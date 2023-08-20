import React from 'react'
import './home.css'
import Notes from '../notes/Notes'
import '../notes/notes.css'

const Home = () => {
  return (
    <header>
      <div className='container home-container'>

        {/* main heading */}

        <h1>
          Hi, I'm Dhanraj
        </h1>
        <h3>
          A developer in Indore.
        </h3>

        {/* CARDS  */}
        <Notes />
      </div>
    </header>
  )
}

export default Home