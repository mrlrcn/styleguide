import './scss/global.scss'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Projects from './views/Projects/Projects'
import Styleguide from './styleguide/Styleguide'
import Project from './views/Project/Project'
import Error404 from './views/404/Error404'
import Headroom from 'react-headroom'
import Topbar from './components/Topbar/Topbar'
import Noise from './components/Noise/Noise'


function App() {


  return (
    <>
      <Topbar /> {/* Fix: mobile + delete extra topbar imports */}

    {/* <Link to="/styleguide">Link para Styleguide</Link> */}

        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Noise />
    </>
  )
}

export default App
