import './scss/global.scss'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Projects from './views/Projects/Projects'
import Styleguide from './styleguide/Styleguide'
import Project from './views/Project/Project'
import Error404 from './views/404/Error404'
import NoisyOverlay from './components/NoisyOverlay/NoisyOverlay'

function App() {


  return (
    <>
 <NoisyOverlay />
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
          <Route path="*" element={<Error404 />} />
        </Routes>


    </>
  )
}

export default App
