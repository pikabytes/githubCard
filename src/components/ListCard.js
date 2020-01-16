import React from 'react'
import Card from './Card'

const ListCard = (props) => (
    <ul>
        List cards....
        {props.profiles.map(profile => (
            <li >
                <Card />
            </li>
        ))}
        
    </ul>
        
    
);


export default ListCard;