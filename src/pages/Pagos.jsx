import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

import NavBar from '../components/nav_bar'

export const Pagos = () => {
  //const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    <div>
      <div className='page'>
        <h1 className='page__title'>Megabuilding H-10</h1>
        <NavBar />
        <h3>Pagar Gastos Comunes</h3>
        <div class="split left">
          <div class="centered">
            <Table>
            <thead>
        <tr>
          <th>Motivo</th>
          <th>Costo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Guardias</td>
          <td>$19990</td>
        </tr>
        <tr>
          <td>Basura</td>
          <td>$5699</td>
        </tr>
        <tr>
          <td>Electricidad edificio</td>
          <td>$14990</td>
        </tr>
        <tr>
          <td>Agua</td>
          <td>$12990</td>
        </tr>
      </tbody>
            </Table>
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
          <div style={{ display: "flex" }} className="CustomButton">
          <Button variant="primary">
            Pagar
            </Button>
          </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Pagos
