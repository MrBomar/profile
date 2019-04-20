import React from 'react';
import './LinkButton.css';

const LinkButton = props => {
    return(
        <button className="linkButton" href={props.link} alt={props.alt}>
            <img src={props.image} alt={props.alt}/>
            <h5>{props.message}</h5>
        </button>
    )
}

export default LinkButton;