import Topbar from "../../components/Topbar/Topbar";
import { Link } from "react-router-dom"
import './Error404.scss';

export default function Error404() {

    //pantallazo azul 

    return (
        <>

            <div className="error-page content-centered color-white color-bg-blue-dark">
                <p className="error-page__header p-big color-blue-dark color-bg-white">ERROR 404 NOT FOUND</p>
                <p>The page you were trying to view does not exist. There could be lots of reasons behind this</p>
                <ul>
                    <li>You followed an OLD, DEAD or BROKEN url.</li>
                    <li>You are just unlucky.</li>
                    <li>To err is human, maaaaaaybe I made a mistake... Maybe.</li>
                </ul>
                <p>Please don't hesitate to <span className="bold color-blue-dark color-bg-white"><Link to="/" className="color-blue-dark">CONTACT ME</Link></span> if you are interested in working with me, you found any mistake I should fix or just feel like chatting. Feel free to <span className="bold color-blue-dark color-bg-white"><Link to="/" className="color-blue-dark">GO BACK HOME</Link></span> and keep navigating if you wish so.</p>              
            </div>

        </>
    )
}