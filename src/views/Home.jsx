import Container from "../components/AboutMe/Container"
import ProjectsList from "../components/projects/Projects"

import Topbar from "../components/Topbar/Topbar"
import Hero from "../components/Hero/Hero"
import AboutMe from "../components/AboutMe/AboutMe"
import HighlightedText from "../components/AboutMe/HighlightedText"
export default function Home() {

    return (
        <>
            <Topbar/>
            <Hero />
            <AboutMe />

            <ProjectsList
                name='Project 1'
            /> 

            <ProjectsList
                name='Project 2'
            />

            <ProjectsList
                name='Project 3'
            />

            <Container color='red' title='Education' text='toxaco <b>aqui</b>'/>
            <Container color='green' title='Tech Skills' text=''/>
            <Container color='blue' title='Softwares'/>
            <Container color='yellow' title='More stuff'/>
            <HighlightedText color='green' title='hola' />

        </>
    )
}