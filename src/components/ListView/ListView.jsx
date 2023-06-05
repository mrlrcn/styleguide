import './ListView.scss';

function ListView (props) {
    return (
        <>
        <section>

        <div className="ListView">
            
            <h2 className="ListView__title">{props.name}</h2>

        </div>

        </section>

        </>
    );
}

export default ListView