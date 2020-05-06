import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Card />
        <Menu />
        <button className= "f6 link dim br3 ph3 pv2 mb2 dib red bg-light-green">Learn More</button><button className= "f6 link dim br3 ph3 pv2 mb2 dib red bg-light-green">Spare parts</button>
    </div>
  );
}

export default App;
