import './ImageCard.scss'
import Buttons from '../buttons/Buttons'

export default function ImageCard(props) {
    return (
        <>
        
            <div className="imagecard">

                <p className="imagecard__bar">{props.bartitle}</p>

                <div className="imagecard__image" style={{background: `url(${props.image}) no-repeat`, backgroundSize: 'cover',}}></div>
                

                <div className="imagecard__content">

                    <h5 className="imagecard__content-title">{props.title}</h5>

                     <p className="imagecard__content-description">{props.description}</p>
                     <p className="imagecard__content-tools">{props.tools}</p>
                                
                    <div className="imagecard__content-actions">                
                        <Buttons  asLink="false"  classStyle="primary" text="View Project"  target="_blank" url=""></Buttons>
                        <Buttons  asLink="false"  classStyle="secondary" text="See case study"  target="_self" url=""></Buttons>
                    </div>
                    
                </div>

                
            </div>

        </>
    )
}