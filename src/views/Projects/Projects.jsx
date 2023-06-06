import Topbar from "../../components/Topbar/Topbar";
import ImageCard from "../../components/ImageCard/ImageCard";
import React, { useEffect, useState } from 'react';
import '/projects.scss';

export default function Projects() {

    //hacer aquí un fetch para los proyectos
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => { 
      fetch('../../projects.json')
        .then(response => response.json())
        .then(data => {
          setJsonData(data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);  

    return (
        <>

        <Topbar />
        
        <section className="section-projects section-padding" id="allprojects">

        {jsonData.map(item => (
            <ImageCard
                key={item.id}
                bartitle={item.bartitle}
                image={item.image}
                alt={item.title}
                title={item.title}
                description={item.description}
            />
            ))}

        </section>



        </>
    )
}