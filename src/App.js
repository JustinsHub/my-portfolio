import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Routes from './components/Routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
