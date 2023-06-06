import Container from "../../components/AboutMe/Container"
import ListView from "../../components/ListView/ListView"

import Topbar from "../../components/Topbar/Topbar"
import Hero from "../../components/Hero/Hero"
import AboutMe from "../../components/AboutMe/AboutMe"
import HighlightedText from "../../components/AboutMe/HighlightedText"
import Contact from "../../components/Contact/Contact"
import Marquee from "../../components/Marquee/Marquee"
import Buttons from "../../components/buttons/Buttons"

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

            <section className="section__featuredprojects section-padding" id="featuredprojects">
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

            {/* <section className="section__contact" id="contact">
                <Contact />
            </section>      */}
           
           <Buttons  asLink="true"  classStyle="primary" text="Ver código"  target="_blank" url=""></Buttons>
           <Buttons  asLink="false"  classStyle="primary" text="Ver código"  target="_blank" url=""></Buttons>
            

        </>
    )
}