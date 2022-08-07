import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BarraLateral from './components/BarraLateral';
import MainContainer from './components/MainContainer';
import ProductosList from './components/ProductosList';
import UsuariosList from './components/UsuariosList';
import EnlaceCategorias from './components/EnlaceCategorias';
import CategoriasList from './components/CategoriasList';

function App() {

  return (

    <BrowserRouter>

      <div id='div-general'>
        <BarraLateral />
        <Routes>
          <Route path='/' exact='true' element={<MainContainer />}></Route>
          <Route path='/productos' exact='true' element={<ProductosList />}></Route>
          <Route path='/usuarios' exact='true' element={<UsuariosList />}></Route>
          <Route path='/categorias' exact='true' element={<EnlaceCategorias />}></Route>
          <Route path='/categorias/hombres' element={<CategoriasList cat='Hombre' />}></Route>
          <Route path='/categorias/mujeres' element={<CategoriasList cat='Mujer' />}></Route>
          <Route path='/categorias/infantil' element={<CategoriasList cat='Infantil' />}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App; 