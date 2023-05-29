import Container from "../components/AboutMe/Container"
import ProjectsList from "../components/projects/Projects"

import Topbar from "../components/Topbar/Topbar"
import Hero from "../components/Hero/Hero"
export default function Home() {

    return (
        <>
            <Topbar/>
            <Hero />

            <ProjectsList
                name='Project 1'
            /> 

            <ProjectsList
                name='Project 2'
            />

            <ProjectsList
                name='Project 3'
            />

            <Container/>
        </>
    )
}