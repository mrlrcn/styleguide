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

          <button className='button__topbar' onClick={changeClass}>x</button>

           <nav className={`topbar ${showNav ? 'topbar--expanded' : ''}`}>              
              <ul className="nav">
                  <li className="nav__item">
                          <Link className="nav__link" onClick={closeMenu} to='/'>Home</Link>  
                  </li>

                  <li className="nav__item">
                      <a className="nav__link" onClick={closeMenu} href="#aboutme">About</a>
                  </li>

                  <li className="nav__item">
                          <Link className="nav__link" onClick={closeMenu} to='/projects'>Projects</Link>
                  </li>
                  
                  <li className="nav__item">
                      <a className="nav__link" onClick={closeMenu} href="#contact">CONTACT</a>
                  </li>
              </ul>
            </nav>

        </header>     
        </>
    )
}