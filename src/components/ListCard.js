import React from 'react'
import Card from './Card'
import './styles/ListCard.css'

const ListCard = (props) => (
    <div className="list-card">
        {props.profiles.map(profile => (
            <div className="card" key={profile.id}> 
                <Card {...profile}/>
            </div>
        ))}
        
    </div>
        
    
);


export default ListCard;