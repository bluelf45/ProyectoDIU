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
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Noticias</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
