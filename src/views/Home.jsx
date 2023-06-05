import Container from "../components/AboutMe/Container"
import ListView from "../components/ListView/ListView"

import Topbar from "../components/Topbar/Topbar"
import Hero from "../components/Hero/Hero"
import AboutMe from "../components/AboutMe/AboutMe"
import HighlightedText from "../components/AboutMe/HighlightedText"
import Contact from "../components/Contact/Contact"
import Marquee from "../components/Marquee/Marquee"
export default function Home() {

    return (
        <>
            <header className="section__header">
                <Topbar/>
            </header>
            

            <section className="section__hero">
                <Hero />
            </section>

            <Marquee />
            
            <section className="section__aboutme section-padding" id="aboutme">
                <AboutMe />
            </section> 

            <section className="section__featuredprojects section-padding"id="featuredprojects">
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

            <section className="section__contact" id="contact">
                <Contact />
            </section>
            
           

            

            <Container color='red' title='Education' text='toxaco <b>aqui</b>'/>
            <Container color='green' title='Tech Skills' text=''/>
            <Container color='blue' title='Softwares'/>
            <Container color='yellow' title='More stuff'/>
            <HighlightedText color='green' title='hola' />

            

        </>
    )
}