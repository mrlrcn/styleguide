import { Link, Route, Routes } from 'react-router-dom'
import Home from '../../views/Home/Home'

export default function SgNav() {
    return (
        <>
        <h2>SG NAV</h2>
        <ul className="sg-nav">
            <li className="sg-nav__item"> <a href="#" className="sg-nav__link"><Link to="/">Home</Link></a></li>
            <li className="sg-nav__item"> <a href="#colors" className="sg-nav__link">Colors</a></li>
            <li className="sg-nav__item"> <a href="#font-family" className="sg-nav__link">Font Family</a></li>
            <li className="sg-nav__item"> <a href="#typography" className="sg-nav__link">Typogrpahy</a></li>
            <li className="sg-nav__item"> <a href="#buttons" className="sg-nav__link">Buttons</a></li>
        </ul>
        </>
    )
}