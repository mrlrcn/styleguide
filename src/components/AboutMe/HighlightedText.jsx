import './HighlightedText.scss';
import './AboutMe.scss'

// export default function HighlightedText() {
//     return (
//         <>

//         <h3><span className="highlight highlight-red">Education</span></h3>
//         <h3><span className="highlight highlight-green">Technical Skills</span></h3>
//         <h3><span className="highlight highlight-blue">Softwares</span></h3>
//         <h3><span className="highlight highlight-yellow">Things I like</span></h3>
        
//         </>
//     )
// }

function HighlightedText ({color = 'red', title = 'HighlightedText Comp'}) {
    return (
        <>
        <h3>
            <span className={`highlight highlight-${color}`}>{title}</span>
        </h3>
        </>
    );
}

export default HighlightedText