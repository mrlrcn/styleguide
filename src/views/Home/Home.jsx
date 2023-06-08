import Container from "../../components/AboutMe/Container"
import ListView from "../../components/ListView/ListView"
import Buttons from "../../components/buttons/Buttons"
import Topbar from "../../components/Topbar/Topbar"
import Hero from "../../components/Hero/Hero"
import AboutMe from "../../components/AboutMe/AboutMe"
import HighlightedText from "../../components/AboutMe/HighlightedText"
import Contact from "../../components/Contact/Contact"
import Card from "../../components/Card/Card"
import Marquee from "../../components/Marquee/Marquee"

import AsciiCat from "../../components/AsciiIcons/AsciiCat"
import AsciiMouse from "../../components/AsciiIcons/AsciiMouse"
import AsciiTea from "../../components/AsciiIcons/AsciiTea"



export default function Home() {

    return (
        <>

            <header className="section__header">
                <Topbar/>
            </header>
            

            <section className=" section section__hero">
                <Hero />
            </section>

            <Marquee />
            
            <section className="section section__aboutme section-padding" id="aboutme">
                <AboutMe />
            </section> 

            <section className="section section__featuredprojects section-padding" id="featuredprojects">
                <h6>Some of my work</h6>
                <ListView
                    name='Project 1'
                /> 

                <ListView
                    name='Project 2'
                />

                <ListView
                    name='Project 3'
                />
            </section>

            <section className="section section__contact">

                <div style={{ position: 'relative'}}>
                    <Card color="blue"  title="https://twitter.com/mrlrcn">
                        <p>TWITTER</p>
                        <AsciiCat />
                    </Card>

                    <Card color="green"  y="15" title="https://github.com/mrlrcn">

                    <p>GITHUB</p>
<AsciiMouse />
                    </Card>

                    <Card color="red" x="30" y="50" title="https://mrlrcn.com/#contact">
                    <AsciiTea />
                        <p>You can <span><h5>contact me</h5></span> @</p>

                        <a className="contact-card__link" href="mailto:m.alarconarbona@gmail.com" target="_blank">m.alarconarbona@gmail.com</a>
                        
                    </Card>
                </div>

            </section>

        </>
    )
}