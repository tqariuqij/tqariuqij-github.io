import React from 'react';
// import Navbar from './components/Navbar'
import Card from './components/Card'
import Menu from './components/Menu'
// import Footer from './components/footer/Footer'


export const Home = () => {
  return (
    <div className="App">
        <Card />
        <Menu />
        <button className= "f6 link dim br3 ph3 pv2 mb2 dib red bg-light-green"><a href='./About.js' className='link'>Learn More</a></button>
        <button className= "f6 link dim br3 ph3 pv2 mb2 dib red bg-light-green"><a href='./Pages/Parts.js' className='link'>Spare Parts</a></button>
    </div>
  );
}


