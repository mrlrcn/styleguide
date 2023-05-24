function IconChevronDown({className, size='', title}) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height={48}
        width={48}
        viewBox="0 -960 960 960"
        // className={className}
        // size ? {size} : ""
        //className={`svgicon ${className ? `${className}` : ''}`}
        // añadimos TITLE si o si para la accesibilidad
        //className={`svgicon ${className ? className : ''}`} //concatenacion string y expresion
        //size={`svgicon ${className ? className : ''}`}
        //className={`svg--${size}`}
        className={`svgicon ${size ? `svg--${size}` : ''}`}
        >
        <title>{title}</title> 
        <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
        fill="currentColor" />
    </svg>
    );
}

export default IconChevronDown