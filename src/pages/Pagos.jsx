import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from'react-router-dom';
import Form from 'react-bootstrap/Form'

import NavBar from '../components/nav_bar'

export const Pagos = () => {
  return (
    <div>
      <div className='page'>
        <h1 className='page__title'>Megabuilding H-10</h1>
        <NavBar />
        <h2>Pagar Gastos Comunes</h2>
        <div clas="container" className="Contenedor">
              <a href="/Finish">
                <Button variant="primary" style={{ marginRight: "auto" }} >Pagar</Button>
              </a>
          </div>
      </div>
    </div>
  )
}

export default Pagos
