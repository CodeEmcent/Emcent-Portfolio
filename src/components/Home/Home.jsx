import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocial from './HeaderSocial'

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='' className='home__img' />
        <h1 className='home__name'>Emekwue Innocent</h1>
        <span className='home__education'>I'm a Front-End Developer</span>

        <HeaderSocial />
      </div>
    </section>
  )
}

export default Home
