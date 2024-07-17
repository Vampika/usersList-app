import React from "react";
import {useNavigate} from 'react-router-dom';

const Card = ({...props}) =>{
    const router = useNavigate();
    
    return (
        <div className="card">
            <h4 className="card__title">{props.name}</h4>
            <hr></hr>
            <div className="card__stat"><span>gender:</span><p>{props.gender}</p></div>
            <div className="card__stat"><span>height:</span><p>{props.height}</p></div>
            <div className="card__stat"><span>mass:</span><p>{props.mass}</p></div>
            <div className="card__button" onClick={() => router(`profile/${props.id}`)}>More &gt;&gt;</div>
        </div>
    )
}

export default Card;