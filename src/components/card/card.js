import React from 'react';
import './card.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt='monsters' src={`https://robohash.org/${props.item.id}?set=set1&size=180x180`} />
            <h2>{props.item.name}</h2>
            <p>{props.item.email}</p>
        </div>
    )
}