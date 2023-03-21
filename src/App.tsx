import React from 'react';
import './App.css';
import { Websocket } from './components';
import { LandingPage } from './views';
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/chat' element={<Websocket />} />
    </Routes>
  );
}

export default App;
