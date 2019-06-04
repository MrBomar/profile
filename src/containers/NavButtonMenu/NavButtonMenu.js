import React from 'react';

export default function NavButtonMenu(props) {
    return (
        <nav>
            <button key="navButton1" className="navButton hide" onClick={props.navButtonClick}>Projects</button>
            <button key="navButton2" className="navButton hide" onClick={props.navButtonClick}>About Me</button>
            <button key="navButton3" className="navButton hide" onClick={props.navButtonClick}>Contact Me</button>
        </nav>
    )
}