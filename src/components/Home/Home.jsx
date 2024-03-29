import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='MyPicture' className='home__img' />
        <h1 className='home__name'>CodeEmcent</h1>
        <span className='home__education'>
          Front-End Developer | Data Analyst | Project Manager
        </span>
        <br />
        <span className='home__education'>Philosopher </span>

        <HeaderSocials />

        <a href='#contact' className='btn'>
          Hire Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home
