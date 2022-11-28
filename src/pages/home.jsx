import React from 'react'

import NavBar from '../components/nav_bar'
import HomeCarousel from '../components/Carousel'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
      <div className="CustomCarousel">
        <HomeCarousel />
      </div>
      <h2>      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/Noticias'
      >Noticias recientes
      </NavLink></h2>
    </div>
  )
}

export default HomePage
