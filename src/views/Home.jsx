import HighlightedText from "../components/AboutMe/HighlightedText"
import ProjectsList from "../components/projects/Projects"
export default function Home() {

    return (
        <>
            
            <p>Hola soy la Home</p>

            <ProjectsList
                name='Project 1'
            /> 

            <ProjectsList
                name='Project 2'
            />

            <ProjectsList
                name='Project 3'
            />


            <HighlightedText 
                text='HighlightedText component'
            />
        </>
    )
}