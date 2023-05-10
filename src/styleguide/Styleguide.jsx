import './Styleguide.scss'
import Nav from './components/Nav'
import Buttons from '../components/buttons/Buttons'

export default function Styleguide() {
    return (
        
        <>

        <Nav />
        <p>Project Gamma: Styleguide</p>

        <section className="styleguideSection styleguideSection__headers">
            
            <h3>Text & Fonts</h3>
            <div className="line-divider"></div>
            <h1>Esto es un H1</h1>
            <h2>Esto es un H2</h2>
            <h3>Esto es un H3</h3>
            <h4>Esto es un H4</h4>
            <h5>Esto es un H5</h5>
            <h6>Esto es un H6</h6>
            <p>Esto es un parrafo donde pone cosas y textos y negrita y esas cosas parrafo parrafo blabla bla.</p>
        </section>

        <section className="styleguideSection-colors">

            <section className="styleguideSection styleguideSection-colors__colors">
                <h3>Colors</h3>
                <div className="line-divider"></div>
                <div className="color-palette color1"></div>
                <div className="color-palette color2"></div>
                <div className="color-palette color3"></div>
                <div className="color-palette color4"></div>

                
            </section>
        
            <section className="styleguideSection styleguideSection-colors__grayscale">
                <h3>Grayscale</h3>
                <div className="line-divider"></div>
                    <div className="color-palette colorw"></div>
                    <div className="color-palette colorg"></div>
                    <div className="color-palette colorgd"></div>
                    <div className="color-palette colorb"></div>
            </section>


        <section className="styleguideSection styleguideSection__buttons">

            <Buttons />

        </section>

         </section>
        
        </>
    )
}