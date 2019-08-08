import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/navbar.js';
import SimpleTable from './components/oweTable';

function App() {
  return (
    <div className="App">
      <MenuAppBar/>
      
      <header className="App-header">        
      </header>

      <SimpleTable/>
    </div>
  );
}

export default App;
