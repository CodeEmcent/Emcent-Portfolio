import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='MyPicture' className='home__img' />
        <h1 className='home__name'>Emekwue Innocent</h1>
        <span className='home__education'>I'm a Front-End Developer</span>

        <HeaderSocial />

        <a href='#contact' className='btn'>
          Hire Me
        </a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
