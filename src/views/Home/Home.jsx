import Container from "../../components/AboutMe/Container"
import ListView from "../../components/ListView/ListView"

import Topbar from "../../components/Topbar/Topbar"
import Hero from "../../components/Hero/Hero"
import AboutMe from "../../components/AboutMe/AboutMe"
import HighlightedText from "../../components/AboutMe/HighlightedText"
import Contact from "../../components/Contact/Contact"
import Card from "../../components/Card/Card"
import Marquee from "../../components/Marquee/Marquee"



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
                <h5>Some of my work</h5>
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

            <div style={{ position: 'relative'}}>
                <Card color="red" x="10" title="hola que tal mar"><p>Hola que tal </p></Card>
                <Card color="green" title="hola que tal mar"><p>Hola que tal </p></Card>
                <Card color="blue" x="30" y="50" title="hola que tal mar"><p>Hola que tal </p></Card>
            </div>
        </>
    )
}