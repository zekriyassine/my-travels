import React,{Fragment} from 'react'
import Travel from './Travel'


const array = [ {

    destination :"Langkawi" ,
    country : "Malaisie",
    photo :"https://images.unsplash.com/photo-1438159510492-d44b489bd1b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" ,
    distance : "9000km", 
},
{

    destination : "Istanbul" ,
    country : "Turkey" ,
    photo : "https://images.unsplash.com/photo-1529270122027-2f6929c45b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    distance : "3000km" ,
},{

    destination : "Dubai",
    country : "Dubai",
    photo : "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    distance : "5000km",
},
{

    destination : "Paris",
    country :"France",
    photo :"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    distance : "300km",
},{

    destination : "Berlin",
    country : "Allemagne",
    photo : "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    distance : "900km",
}

]

const Travels = () =>
(
<div>

    {
        array.map(element => (

            
         <Travel destination={element.destination} country={element.country} photo={element.photo} distnace={element.distance} />
            
        ))}

</div>

);




export default Travels;
