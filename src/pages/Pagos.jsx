import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Routes, Route, useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form'

import NavBar from '../components/nav_bar'

export const Pagos = () => {
  return (
    <div>
      <div className='page'>
        <h1 className='page__title'>Pagar Gastos Comunes</h1>
        <NavBar />
        <div className='Pagar'>
        <Form>
          <Form.Group className="mb-3" controlId="Banco">
            <Form.Label>Banco</Form.Label>
            <Form.Select id="Banco">
              <option>Banco 1</option>
              <option>Banco 2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="NumeroTarjeta">
            <Form.Label>Numero de tarjeta</Form.Label>
            <Form.Select id="NumeroTarjeta">
              <option>Tarjeta 1</option>
              <option>Tarjeta 2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="FechaVencimiento">
            <Form.Label>Fecha Vencimiento</Form.Label>
            <Form.Select id="FechaVencimiento">
              <option>Espacio Comun 1</option>
              <option>Espacio Comun 2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="CVV">
            <Form.Label>CVV</Form.Label>
            <Form.Control ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="NombreTitular">
            <Form.Label>Nombre Titular</Form.Label>
            <Form.Control id="NombreTitular"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Correo">
            <Form.Label>Correo</Form.Label>
            <Form.Control id="Correo"></Form.Control>
          </Form.Group>
        </Form>
        <div style={{ display: "flex" }} className="CustomButton">
        <Button variant="primary" style={{ marginLeft: "auto" }}>Pagar</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Pagos
