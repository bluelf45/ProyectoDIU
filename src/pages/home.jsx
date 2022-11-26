import React from 'react'

import NavBar from '../components/nav_bar'
import HomeCarousel from '../components/Carousel'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
      <HomeCarousel />
    </div>
  )
}

export default HomePage
