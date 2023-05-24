import React, { useState, useRef } from 'react';
import './DraggableComponent.scss'; // Archivo CSS para los estilos del componente

function DraggableComponent() {
    const DraggableComponent = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef(null);
    const offsetRef = useRef({ x: 0, y: 0 });

    const handleMouseDown = (event) => {
        setIsDragging(true);
        const boundingRect = dragRef.current.getBoundingClientRect();
        const offsetX = event.clientX - boundingRect.left;
        const offsetY = event.clientY - boundingRect.top;
        offsetRef.current = { x: offsetX, y: offsetY };
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
        const newX = event.clientX - offsetRef.current.x;
        const newY = event.clientY - offsetRef.current.y;
        setPosition({ x: newX, y: newY });
        }
    };

    return (
        <div
        ref={dragRef}
        className="draggable-component"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        >
        <p>contenido</p>
        </div>
    );
    };
}
export default DraggableComponent;
