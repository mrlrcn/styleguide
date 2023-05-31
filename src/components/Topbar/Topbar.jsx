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

        {/* { showNav === true */}
           <nav className={`topbar ${showNav ? 'topbar--expanded' : ''}`}>
              
              <ul className="nav">
                  <li className="nav__item">
                          <Link className="nav__link" onClick={closeMenu} to='../../views/Home'>Home</Link>  
                  </li>

                  <li className="nav__item">
                      <a href="#aboutme" className="nav__link">About</a>
                  </li>

                  <li className="nav__item">
                          <Link className="nav__link" onClick={closeMenu} to='../../views/Work'>WORK</Link>
                  </li>
                  
                  <li className="nav__item">
                      <a href="#contact" className="nav__link">CONTACT</a>
                  </li>
              </ul>
            </nav>
          {/* :
            <nav className='desktop-topbar'>          
                <ul className="desktop-nav">
                    <li className="desktop-nav__item">
                            <Link className="desktop-nav__link" onClick={closeMenu} to='../../views/Home'>Home</Link>  
                    </li>

                    <li className="desktop-nav__item">
                        <a href="#aboutme" className="desktop-nav__link">About</a>
                    </li>

                    <li className="desktop-nav__item">
                            <Link className="desktop-nav__link" onClick={closeMenu} to='../../views/Work'>WORK</Link>
                    </li>
                    
                    <li className="desktop-nav__item">
                        <a href="#contact" className="desktop-nav__link">CONTACT</a>
                    </li>
                </ul>
              </nav>       
            } */}
        
        </>
    )
}