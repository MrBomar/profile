import React from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <footer>
            <a href ="https://www.youracclaim.com/users/leslie-bomar/badges" alt='Acclaim Profile'>
                <img src='./images/Acclaim_Icon.png' height='50' width='50' alt="Acclaim Icon"/>
            </a>
            <a href="https://github.com/MrBomar">
                <img src='/images/github-icon.png' height='50' width='50' alt="GitHub Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/mrlesbomar/">
                <img src="/images/linkedin-icon.png" height='50' width='50' alt="LinkedIn Icon"/>
            </a>
            <a href="https://stackexchange.com/users/12588875/leslie-bomar">
                <img src="/images/stackoverflow-icon.png" height='50' width='50' alt="Stack Overflow Icon" />
            </a>
            <a href="mailto:mrlesbomar@gmail.com">
                <img src='/images/gmail-icon.png' height='50' width='50' alt='Gmail Icon'/>
            </a>
        </footer>
    )
}

export default Footer;