import React from 'react';
import './Card.css'

const Menu = () => {
    return(
        <div className='flex flex-wrap white dib br4 ma2 pa2 tc shadow-5 grow' >
            
                <div className= 'dib br1 pl7 ma1 pa1 colour'>
                  <h3>Do you need</h3>
                   <ul className='list'>
                     <li><a href='/' className = 'link underline red hover-blue'>Car Part</a></li>
                     <li><a href='/' className = 'link underline red hover-blue'>Car Repairs</a></li>
                     <li><a href='/' className = 'link underline red hover-blue'>Car Hire</a></li>
                     <li><a href='/' className = 'link underline red hover-blue'>Lorry Transpor</a></li>
                     <li><a href='/' className = 'link underline red hover-blue'>Luxury Car hire</a></li>
                 </ul>
                 <h3>we have it all</h3>
                </div>
        </div>
    )
}
export default Menu;