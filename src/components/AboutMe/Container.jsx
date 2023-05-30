import HighlightedText from "./HighlightedText"
import './AboutMe.scss'

export default function Container({color, title, text}) {
    return (
        <div className="aboutMe__container">
                <HighlightedText 
                title={title}
                color={color}
                />
                <p text={text}>{text}</p>

        </div>
    )
}
