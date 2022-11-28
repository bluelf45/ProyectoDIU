import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Noticias from '../pages/Noticias'
import Pagos from '../pages/Pagos'
import Reservas from '../pages/Reservas'
import TerminarPago from '../pages/Finish'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Pagos' element={<Pagos />} />
        <Route path='/Reservas' element={<Reservas />} />
        <Route path='/Noticias' element={<Noticias />} />
        <Route path='/Finish' element={<TerminarPago />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
