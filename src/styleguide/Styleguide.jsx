import './Styleguide.scss'
import SgNav from './components/SgNav'
import Buttons from '../components/buttons/Buttons'
import IconChevronDown from './components/icons/IconChevronDown'

export default function Styleguide() {
    return (
        
        <>
        <SgNav />

        <div className="styleguide">
            <h1>Project Gamma: Styleguide.</h1>
            
            <article id="colors">
                <h2>Color Palette</h2>
                <section className='sg-section__colors'>

                    <div className="color-palette color1"></div>
                    <div className="color-palette color2"></div>
                    <div className="color-palette color3"></div>
                    <div className="color-palette color4"></div>

                    <div className="color-palette colorw"></div>
                    <div className="color-palette colorg"></div>
                    <div className="color-palette colorgd"></div>
                    <div className="color-palette colorb"></div>
                </section>
            </article>

            <article id="font-family">
                <h2>Font-family</h2>
                <section className="sg-section__font-family">
                    here goes font families im gonna use
                </section>
            </article>

            <article id="typography">
                <h2>Typography</h2>
                <section className="sg-section__typography">
                    <h1>Esto es un H1</h1>
                    <h2>Esto es un H2</h2>
                    <h3>Esto es un H3</h3>
                    <h4>Esto es un H4</h4>
                    <h5>Esto es un H5</h5>
                    <h6>Esto es un H6</h6>
                    <p>Esto es un parrafo donde pone cosas y textos y negrita y esas cosas parrafo parrafo blabla bla.</p>
                </section>
            </article>

            <article id="buttons">
                <h2>Buttons</h2>
                <section className="sg-section__buttons">
                    <Buttons />
                </section>
            </article>

            <IconChevronDown  size="small" className="green"/>
            <IconChevronDown  size="big" />

        </div>

        
        </>
    )
}