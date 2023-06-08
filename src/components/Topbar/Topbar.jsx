import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './Topbar.scss';
import Home from '../../views/Home/Home'
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
        {/* Main header element */}
        <header>
          {/* Menu burguer button */}
          <button className='button__topbar' onClick={changeClass}>x</button>
            {/* Main navigation */}
           <nav className={`topbar ${showNav ? 'topbar--expanded' : ''}`}>              
              <ul className="nav">

                  {/* Home Link */}
                  <li className="nav__item">
                      <Link className="nav__link" onClick={closeMenu} to='/'>Home</Link>  
                  </li>

                  {/* About section Link */}
                  <li className="nav__item">
                    <a className="nav__link" onClick={closeMenu} href="#aboutme">About</a>
                  </li>

                  {/* All Projects View Link */}
                  <li className="nav__item">
                    <Link className="nav__link" onClick={closeMenu} to='/projects'>Projects</Link>
                  </li>

                  {/* Contact section link */}
                  <li className="nav__item">
                      <a className="nav__link" onClick={closeMenu} href="#contact">Contact</a>
                  </li>
                  {/* JUST FOR TESTING DELETE LATER */}
                  <li className="nav__item">
                          <Link className="nav__link" onClick={closeMenu} to='/#contact'>Contact2</Link>
                  </li>
              </ul>
            </nav>

        </header>     
        </>
    )
}