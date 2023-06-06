import { useEffect } from 'react';
import './Contact.scss'

export default function Contact() {
    useEffect(() => {
        var draggables = document.querySelectorAll('.draggable');
        var activeDraggable = null;
        var offsetX, offsetY;
        draggables.forEach(function(draggable) {
        draggable.addEventListener('mousedown', function(event) {
            activeDraggable = draggable;
            offsetX = event.clientX - draggable.getBoundingClientRect().left;
            offsetY = event.clientY - draggable.getBoundingClientRect().top;
            draggable.style.zIndex = getHighestZIndex() + 1;
        });
        draggable.addEventListener('mouseup', function() {
            activeDraggable = null;
        });
        });
        document.addEventListener('mousemove', moveElement);
        function moveElement(event) {
        if (activeDraggable) {
            activeDraggable.style.left = (event.clientX - offsetX) + 'px';
            activeDraggable.style.top = (event.clientY - offsetY) + 'px';
        }
        }
        function getHighestZIndex() {
        var highestZIndex = 0;
        draggables.forEach(function(draggable) {
            var zIndex = parseInt(window.getComputedStyle(draggable).getPropertyValue('z-index'));
            if (zIndex > highestZIndex) {
            highestZIndex = zIndex;
            }
        });
        return highestZIndex;
        }
    })

    return (
        <>
        
        <div id="contactCardsContainer">
            <div className="draggable draggable-card">
                <div className="draggable-card__topbar">
                <h3 className="draggable-card__title">Ventana Roja</h3>
                </div>
                <div className="draggable-card__content">
                decoration
                </div>
            </div>

            <div className="draggable draggable-card">
                <div className="draggable-card__topbar">
                <h3 className="draggable-card__title">Ventana Azul</h3>
                </div>
                <div className="draggable-card__content">
                rrss
                </div>
            </div>

            <div className="draggable draggable-card">
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