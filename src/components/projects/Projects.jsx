import './Projects.scss';

function ProjectsList (props) {
    return (
        <>
        <section className="section-padding">

        <div className="projectListView">
            
            <h2 className="projectListView__title">{props.name}</h2>

        </div>

        </section>

        </>
    );
}

export default ProjectsList