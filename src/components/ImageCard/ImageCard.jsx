import './ImageCard.scss'

export default function ImageCard(props) {
    return (
        <>
        
            <div className="imageCard">

            <p>{props.title}</p>
            <img src={props.image} alt={props.alt} />
                
            </div>

        </>
    )
}