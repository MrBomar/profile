import React from 'react';
import NavButton from '../../components/NavButton/NavButton';
import './NavDropMenu.css';

export default function NavDropMenu(props) {
    if(props.navMenuClosed === false){
        return (
            <nav>
                <NavButton buttonId='hamburgerButton' buttonClick={props.navButtonClick} buttonText='&#9776;'/>
                <div id="navDropMenu" className="navDropMenu">
                    <NavButton buttonId='projectsButton' buttonClick={props.navButtonClick} buttonText="Projects"/>
                    <NavButton buttonId='aboutMeButton' buttonClick={props.navButtonClick} buttonText="About Me"/>
                    <NavButton buttonId='contactMeButton' buttonClick={props.navButtonClick} buttonText='Contact Me'/>
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