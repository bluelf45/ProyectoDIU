import React from 'react'
import NavBar from '../components/nav_bar'
import Pagination from 'react-bootstrap/Pagination';


let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={(event) => this.paginationClicked(event)}>
      {number}
    </Pagination.Item>,
  );
}

export const Noticias = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Megabuilding H-10</h1>
      <NavBar />
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
          <div class='col'> 
            <h4>Cambio de personal de administracion del edificio</h4>
            <h6>Informamos a nuestros estimados residentes que el administrador de finanzas del complejo Pablo Gutierrez y la administradora de espacios comunes Ana Liza, seran removidos y reemplazados de sus puestos a partir del dia 1 de enero del año entrante.</h6>
          </div>
          <div class='col'>
            <h4>Basura en piscinas del establecimiento</h4>
            <h6>Informamos a nuestros estimados residentes que a partir del dia 10 de noviembre se empezara a multar a cualquier residente del edificio que deje basura en las piscinas del complejo. Deseamos mantener un espacio libre de basura en las zonas comunes y para ello necesitamos su coolaboracion.</h6>
          </div>
          <div class='col'>
            <h4>Ingresos de visitantes no autorizados</h4>
            <h6>Informamos a nuestros estimados visitantes que a lo largo de los ultimos meses hemos tenido un gran flujo de visitantes, por ello, desde el dia 5 de octubre, se requerira avisar a porteria sobre cualquier visitante que desee ingresar al complejo de manera previa a su llegada.</h6>
          </div>
        </div>
      </div>
      <div class="Paginacion">
      <Pagination>
            <Pagination.Prev />
              {items}
            <Pagination.Next />
          </Pagination>
      </div>
    </div>
  )
}

export default Noticias

