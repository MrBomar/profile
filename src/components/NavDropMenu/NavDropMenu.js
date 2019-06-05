import React from 'react';
import NavButton from '../NavButton/NavButton';
import './NavDropMenu.css';

export default function NavDropMenu(props) {
    if(props.navMenuClosed === false){
        return (
            <nav>
                <NavButton buttonId='hamburgerButton' buttonClick={props.navButtonClick} buttonText='&#9776;'/>
                <div id="navDropMenu" className="navDropMenu">
                    {props.renderButtons()}
                </div>
            </nav>
        )
    } else {
        return (
            <nav>
                <NavButton buttonId='hamburgerButton' buttonClick={props.navButtonClick} buttonText='&#9776;'/>
            </nav>
        )
    }
}