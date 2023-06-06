import './scss/global.scss'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Projects from './views/Projects/Projects'
import Styleguide from './styleguide/Styleguide'
import Project from './views/Project/Project'

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
          <Route path="/project/:projectID" element={<Project />} />
        </Routes>
    </>
  )
}

export default App
