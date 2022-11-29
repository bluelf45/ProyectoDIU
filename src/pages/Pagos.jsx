import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from'react-router-dom';
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'

import NavBar from '../components/nav_bar'

export const Pagos = () => {
  return (
    <div>
      <div className='page'>
        <h1 className='page__title'>Megabuilding H-10</h1>
        <NavBar />
        <h3>Pagar Gastos Comunes</h3>
        <div class="split left">
          <div class="centered">
            <h2>Programa aqui jaffar</h2>
          </div>
        </div>

        <div class="split right">
          <div class="centered">
          <div class='column'></div>
          <div class='column'>
            <Form.Group className="mb-3" controlId="Tarjeta">
              <Form.Label>Tarjeta</Form.Label>
              <Form.Select id="Tarjeta">
                <option>Tarjeta registrada 1</option>
                <option>Tarjeta registrada 2</option>
              </Form.Select>
            </Form.Group>
            <h6>
              <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
              to='/Finish'
              >Registrar tarjeta
              </NavLink>
            </h6>
          </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Pagos
