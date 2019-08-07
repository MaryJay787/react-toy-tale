import React from 'react';
import ToyCard from './ToyCard.js'

function CardContainer(props){

        return (
            <div className="toy-collection">
                {props.toys.map((toy, idx) => <ToyCard key={idx} toy={toy}/>)}
            </div>
        )
   
}

export default CardContainer