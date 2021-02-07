import React from 'react';
import './card-list.css';
import { Card } from '../card/card';

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}