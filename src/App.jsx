import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Styleguide from './styleguide/Styleguide'

function App() {

  return (
    <>
    <header>
      <h1>Clase Wakkos</h1>
      <Link to="/">HOME</Link>
      <Link to="/styleguide">Link para Styleguide</Link>
    </header>

        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
