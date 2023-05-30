import './Marquee.scss';

export default function Marquee() {
    return (
        <>
            {/* <!-- parent --> */}
            <div className="marquee">
                {/* <!-- child 1 --> */}
                <div className="marquee__group">
                    <span>About me ✦ </span>
                    <span>About me ✦ </span>
                    <span>About me ✦ </span>
                    <span>About me ✦ </span>
                    <span>About me ✦ </span>
                </div>
                {/* <!-- child 2 --> */}
                <div className="marquee__group" aria-hidden="true">
                    <span>About me ✦ </span>
                    <span>About me ✦ </span>
                    <span>About me ✦ </span>
                    <span>About me ✦ </span>
                    <span>About me ✦ </span>
                </div>
        
            </div>
        
        </>
    )
}