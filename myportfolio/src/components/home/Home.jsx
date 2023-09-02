import React from 'react'
import './home.css'
// import Notes from '../notes/Notes'
import '../notes/notes.css'

const Home = () => {
  return (
    <header>
      <div className='container home-container'>

        {/* main heading */}

        <h1 className='name-heading'>
          Hi, I'm Dhanraj
        </h1>
        <h3 className='sub-heading'>
          A developer in Indore.
        </h3>

        {/* CARDS  */}
      </div>
        {/* <Notes /> */}
    </header>
  )
}

export default Home