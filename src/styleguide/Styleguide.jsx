import './Styleguide.scss'
import Nav from './components/Nav'
import Buttons from '../components/buttons/Buttons'

export default function Styleguide() {
    return (
        
        <>

        <Nav />
        <p>Styleguide: Muestrario.</p>

        <section className="styleguideSection styleguideSection__headers">
            
            <h1>Esto es un H1</h1>
            <h2>Esto es un H2</h2>
            <h3>Esto es un H3</h3>
            <h4>Esto es un H4</h4>
            <h5>Esto es un H5</h5>
            <h6>Esto es un H6</h6>

        </section>

        <section className="styleguideSection styleguideSection__buttons">

            <Buttons></Buttons>

        </section>
        
        </>
    )
}