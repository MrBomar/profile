import React from 'react';
import './NavButton.css';

export default function NavButton(props) {
    return (
        <button key={props.buttonId} id={props.buttonId} className="navButton" onClick={props.buttonClick}>{props.buttonText}</button>
    )
}