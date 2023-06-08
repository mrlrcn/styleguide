import './ImageCard.scss'
import Buttons from '../buttons/Buttons'
import { Link } from 'react-router-dom'

export default function ImageCard(props) {
    return (
        <>
        
            <div className="imagecard">

                <p className="imagecard__bar">{props.bartitle}</p>

                <div className="imagecard__image" style={{background: `url(${props.image}) no-repeat`, backgroundSize: 'cover',}}></div>
                

                <div className="imagecard__content">

                    <div className="imagecard__content-top">

                        <h5 className="imagecard__content-top-title">{props.title}</h5>

                        <p className="imagecard__content-top-tools" >{props.tools?.map(tool => <span className="imagecard__content-top-tools__item">{tool}</span> )} </p>

                    </div>

                     <p className="imagecard__content-description">{props.description}</p>
                               
                    <div className="imagecard__content-actions">                
                        <Buttons  asLink="false"  classStyle="primary" text="View Project"  target="_blank" url=""></Buttons>
                        <Buttons  asLink="false"  classStyle="secondary" text="See case study"  target="_self" url=""></Buttons>
                        
                    </div>
                    
                </div>

                
            </div>

        </>
    )
}