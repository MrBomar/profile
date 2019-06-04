import React from 'react';
import NavDropMenu from '../NavDropMenu/NavDropMenu';
import NavButtonMenu from '../NavButtonMenu/NavButtonMenu';
import './Header.css';

export default function Header(props) {
    return (
        <header>
            <div id="myTitle" onClick={props.closeNavMenu}>
                <h1>Leslie C. Bomar</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
            {(props.mobileView)?
                <NavDropMenu 
                    navMenuClosed={props.navMenuClosed}
                    navButtonClick={props.navButtonClick}
                />:
                <NavButtonMenu
                    navButtonClick={props.navButtonClick}
                />}
        </header>
    )
}