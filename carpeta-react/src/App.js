import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BarraLateral from './components/BarraLateral';
import MainContainer from './components/MainContainer';

function App() {

  return (

    <BrowserRouter>

      <div id='div-general'>
        <BarraLateral />
        <MainContainer />
      </div>

      </BrowserRouter>
  )
}

export default App; 