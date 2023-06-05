import Topbar from "../../components/Topbar/Topbar";
import ImageCard from "../../components/ImageCard/ImageCard";
import React, { useEffect, useState } from 'react';

export default function Projects() {

    //hacer aquí un fetch para los proyectos
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => { //nos permite hacer la petición HTTP
      fetch('../../projects.json')
      //usamons then() para encadenar acciones a una promesa resuelta exitosamente
        .then(response => response.json()) //para obtener los datos en formato json
        .then(data => {
          setJsonData(data); //los datos se pasan a la función data y se establecen en el estado jsonData
        })
        .catch(error => {
          console.log(error);
        });
    }, []);  

    return (
        <>

        <Topbar />

        {jsonData.map(item => (
            <ImageCard
                key={item.id}
                image={item.image}
                alt={item.title}
                title={item.title}
            />
            ))}

        </>
    )
}