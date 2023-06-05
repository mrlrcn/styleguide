import './scss/global.scss'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Projects from './views/Projects'
import Error404 from './views/Error404'
import Styleguide from './styleguide/Styleguide'

function App() {

  return (
    <>
    {/* <header>
      <h1>Clase Wakkos</h1>
      <Link to="/">HOME</Link>
      <Link to="/styleguide">Link para Styleguide</Link>
    </header> */}

        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </>
  )
}

export default App
