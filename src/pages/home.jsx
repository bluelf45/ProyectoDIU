import React from 'react'

import NavBar from '../components/nav_bar'
import HomeCarousel from '../components/Carousel'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Megabuilding H-10</h1>
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
      <div style={{ display: "flex", justifyContent: "center" }}>
          <div class='col'>
            <div class ='col'>
              <h4>Remodelacion de piscina 1</h4>
              <h6>Informamos a nuestros estimados residentes que la piscina 1 estara cerrada desde el dia 6 de enero hasta el 25 de enero debido a una remodelacion en la misma.</h6>
            </div> 
            <div class='col'> 
              <h4>Remodelacion de ascensor en edificio B</h4>
              <h6>Informamos a nuestros estimados residentes que el ascensor del edificio B permanecera cerrado desde el dia 20 de diciembre hasta el dia 25 de diciembre debido a una reparacion necesaria en la estructura. Lamentamos los inconvenientes que esto pueda causar.</h6>
            </div>
            </div>
          </div>
    </div>
  )
}

export default HomePage
