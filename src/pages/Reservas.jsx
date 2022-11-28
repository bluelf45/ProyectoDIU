import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import NavBar from '../components/nav_bar'

export const Reservas = () => {
  return (
    <div>
        <div className='page'>
        <h1 className='page__title'>Frontend Sample App</h1>
        <NavBar />
        <h2>Página de Reservas</h2>
        <div className='Reserve'>
        <Form>
          <Form.Group className="mb-3" controlId="EspacioComun">
            <Form.Label>Espacio Comun</Form.Label>
            <Form.Select id="EspacioComun">
              <option>Espacio Comun 1</option>
              <option>Espacio Comun 2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Fecha">
            <Form.Label>Fecha de reserva</Form.Label>
            <Form.Select id="Fecha">
              <option>Espacio Comun 1</option>
              <option>Espacio Comun 2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="HoraInicio">
            <Form.Label>Hora de inicio</Form.Label>
            <Form.Select id="HoraInicio">
              <option>Espacio Comun 1</option>
              <option>Espacio Comun 2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="HoraTermino">
            <Form.Label>Hora de Termino</Form.Label>
            <Form.Select id="HoraTermino">
              <option>Espacio Comun 1</option>
              <option>Espacio Comun 2</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <div style={{ display: "flex" }} className="CustomButton">
        <Button variant="primary" style={{ marginLeft: "auto" }}>Reservar</Button>{' '}
        </div>
        </div>
        </div>
    </div>

  )
}

export default Reservas
