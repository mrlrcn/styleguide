import Container from "../components/AboutMe/Container"
import ProjectsList from "../components/projects/Projects"
import DraggableComponent from "../components/DraggableComponent/DraggableComponent"
import Topbar from "../components/Topbar/Topbar"
export default function Home() {

    return (
        <>
            <Topbar/>
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

            <Container/>

            <DraggableComponent
            className='draggable-component' /> { /* no se ve pero no da error??*/ }
        </>
    )
}