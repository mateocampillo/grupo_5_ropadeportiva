import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BarraLateral from './components/BarraLateral';
import MainContainer from './components/MainContainer';
import ProductosList from './components/ProductosList';
import UsuariosList from './components/UsuariosList';

function App() {

  return (

    <BrowserRouter>

      <div id='div-general'>
        <BarraLateral />
        <Routes>
          <Route path='/' exact='true' element={<MainContainer />}></Route>
          <Route path='/productos' exact='true' element={<ProductosList />}></Route>
          <Route path='/usuarios' exact='true' element={<UsuariosList />}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App; 