import React from 'react';
import LinkButton from './LinkButton';
import './Footer.css';

const Footer = props => {
    return (
        <footer>
            <LinkButton 
                link="https://github.com/MrBomar" 
                image="/images/github-icon.png" 
                alt="github icon"
                message="Visit my Github"
            />
            <LinkButton
                link="https://linkedin.com"
                image="/images/linkedin-icon.png"
                alt="linked in icon"
                message="Visit my LinkedIn"
            />
            <LinkButton
                link="https://stackexchange.com/users/12588875/leslie-bomar"
                image="/images/stackoverflow-icon.png"
                alt="stack overflow icon"
                message="Visit my Stack Overflow"
            />
            <LinkButton
                link="mailto:mrlesbomar@gmail.com"
                image="/images/gmail-icon.png"
                alt="gmail icon"
                message="Contact Me"
            />
        </footer>
    )
}

export default Footer;