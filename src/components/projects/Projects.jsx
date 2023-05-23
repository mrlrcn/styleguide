import './Projects.scss';

function ProjectsList (props) {
    return (
        <>
        <div className="projectListView">
            
            <h2 className="projectListView__title">{props.name}</h2>

        </div>
        </>
    );
}

export default ProjectsList