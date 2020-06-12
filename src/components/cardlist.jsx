import React from 'react'
import Card from "./card"
import '../styles/card.css'


const CardList = (props) => (
    <div className="card-list">
        {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
);

export default CardList;