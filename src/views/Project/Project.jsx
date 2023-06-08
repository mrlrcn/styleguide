import { useParams } from "react-router-dom"
import projects from "../../../public/projects.json"
//individual project view
export default function Project () {

    const { id } = useParams();
    const thisProject = projects.find(item => item.id === id)

    return (
        <>
        <p>individual project view for { thisProject.title }</p>
        <img src={thisProject.image} alt={thisProject.tittle} />
        </>
    )
}