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
      <h1>Proyecto Gamma</h1>
      <button onClick={changeClass}>🍔</button>
    </header>

    { showNav === true
      ? <nav className='topbar'>
          
        <ul className="nav">
            <li className="nav__item">
                <a href="#" className="nav__link">
                    <Link onClick={closeMenu} to='../../views/Home'>Home</Link>
                </a>
            </li>

            <li className="nav__item">
                <a href="#aboutme" className="nav__link">About</a>
            </li>

            <li className="nav__item">
                <a href="#" className="nav__link">
                    <Link onClick={closeMenu} to='../../views/Home'>WORK</Link>
                </a>
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