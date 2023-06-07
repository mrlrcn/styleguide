import { useEffect } from 'react';
import './Card.scss';
export default function Card(props) {

    const color = props.color || 'red';
    // return <article>
    //     <img src={props.image}></img>
    //     <p dangerouslySetInnerHTML={{__html: props.text}}/>
    // </article>
    useEffect(() => {
        var draggables = document.querySelectorAll('.draggable');
        var activeDraggable = null;
        var offsetX, offsetY;
        
        draggables.forEach(function(draggable) {

        draggable.addEventListener('mousedown', function(event) {
            activeDraggable = draggable;
            offsetX = event.clientX - draggable.getBoundingClientRect().left;
            offsetY = event.clientY;
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
    }, [])
    return <div className={'draggable ' + color } style={{top: (props.x || 0) + '%', left: (props.y || 0) + '%'}}>
        <div className="title-bar">
            <h3 className="title">{ props.title }</h3>
        </div>
        <div className="content">
            { props.children }
        </div>
    </div>
}