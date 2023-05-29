import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './Topbar.scss';
import Home from '../../views/Home'
import { useEffect, useState } from 'react'
export default function Topbar() {
    
    let [showNav, setshowNav] = useState(false);
    
    function changeClass() {
        setshowNav(!showNav);
      }
    
      function closeMenu() {
        setshowNav(false);
      }

    return (
        <>

    <header>
      <button className='button__topbar' onClick={changeClass}>🍔</button>
    </header>

    { showNav === true
      ? <nav className='topbar'>
          
        <ul className="nav">
            <li className="nav__item">
                    <Link className="nav__link" onClick={closeMenu} to='../../views/Home'>Home</Link>  
            </li>

            <li className="nav__item">
                <a href="#aboutme" className="nav__link">About</a>
            </li>

            <li className="nav__item">
                    <Link className="nav__link" onClick={closeMenu} to='../../views/Home'>WORK</Link>
            </li>
            
            <li className="nav__item">
                <a href="#contact" className="nav__link">CONTACT</a>
            </li>

        </ul>

        </nav>
      : ''}

        
        </>
    )
}