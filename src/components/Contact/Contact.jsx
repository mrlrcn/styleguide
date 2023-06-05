import './Contact.scss'

export default function Contact() {
    return (
        <>
        
        <div id="contactCardsContainer">
            <div className="draggable-card">
                <div className="draggable-card__topbar">
                <h3 className="draggable-card__title">Ventana Roja</h3>
                </div>
                <div className="draggable-card__content">
                decoration
                </div>
            </div>

            <div className="draggable-card">
                <div className="draggable-card__topbar">
                <h3 className="draggable-card__title">Ventana Azul</h3>
                </div>
                <div className="draggable-card__content">
                rrss
                </div>
            </div>

            <div className="draggable-card">
                <div className="draggable-card__topbar">
                <h3 className="draggable-card__title">Ventana Verde</h3>
                </div>
                <div className="draggable-card__content">
                email
                </div>
            </div>
        </div>


        </>
    )
}