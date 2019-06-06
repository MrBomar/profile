import React from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <footer>
            <a href ="https://www.youracclaim.com/users/leslie-bomar/badges" alt='Acclaim Profile' rel='noopener noreferrer' target='_blank'>
                <img src='./images/Acclaim_Icon.png' height='50' width='50' alt="Acclaim Icon"/>
            </a>
            <a href="https://github.com/MrBomar" rel='noopener noreferrer' target='_blank'>
                <img src='/images/github-icon.png' height='50' width='50' alt="GitHub Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/mrlesbomar/" rel='noopener noreferrer' target='_blank'>
                <img src="/images/linkedin-icon.png" height='50' width='50' alt="LinkedIn Icon"/>
            </a>
            <a href="https://stackexchange.com/users/12588875/leslie-bomar" rel='noopener noreferrer' target='_blank'>
                <img src="/images/stackoverflow-icon.png" height='50' width='50' alt="Stack Overflow Icon" />
            </a>
            <a href="mailto:mrlesbomar@gmail.com" rel='noopener noreferrer' target='_blank'>
                <img src='/images/gmail-icon.png' height='50' width='50' alt='Gmail Icon'/>
            </a>
            <h6>This website was designed and maintained by Leslie C. Bomar III.</h6>
        </footer>
    )
}

export default Footer;