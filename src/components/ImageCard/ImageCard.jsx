import './ImageCard.scss'

export default function ImageCard(props) {
    return (
        <>
        
            <div className="imagecard">

                <p className="imagecard__bar">{props.bartitle}</p>

                <img className="imagecard__image" src={props.image} alt={props.alt} />

                <h5 className="imagecard__title">{props.title}</h5>
                <p className="imagecard__description">{props.description}</p>
                
                <div className="imagecard__actions">
                <button>view project</button>
                <a href="">Case study</a>
                </div>
                
            </div>

        </>
    )
}