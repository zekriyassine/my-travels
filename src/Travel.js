import React from "react";

const Travel = ({destination,country,photo,distance}) => (

    <figure>
        <img src={photo} alt={destination}/>
        <figcaption>
            <blockquote>
                <ul>
                    <li>{destination}</li>
                
                    <li>{country}</li>
                
                    <li>{distance}</li>
                </ul>
                
            </blockquote>



        </figcaption>

    </figure>

);

export default Travel;
