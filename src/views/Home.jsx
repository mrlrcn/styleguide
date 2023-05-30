import Container from "../components/AboutMe/Container"
import ProjectsList from "../components/projects/Projects"

import Topbar from "../components/Topbar/Topbar"
import Hero from "../components/Hero/Hero"
import Marquee from "../components/Marquee/Marquee"
export default function Home() {

    return (
        <>
            <Topbar/>
            <Hero />
            <Marquee />

            <ProjectsList
                name='Project 1'
            /> 

            <ProjectsList
                name='Project 2'
            />

            <ProjectsList
                name='Project 3'
            />

            {/* <Container/> */}

        </>
    )
}