import React from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <footer>
            <a href ="https://www.credly.com/users/mrlesbomar" alt='Credly Profile' rel='noopener noreferrer' target='_blank'>
                <img src='./images/Credly_Logo_Orange.png' height='50' width='auto' alt="Credly Icon"/>
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
            <a href="https://www.instagram.com/bomarleslie/" alt="Instagram Profile" rel='noopener noreferrer' target='_blank'>
                <img src='/images/instagram-icon.png' height='auto' width='50' alt='Instagram Icon'/>
            </a>
            <a href='https://app.pluralsight.com/profile/leslie-bomar-53' alt='Pluralsight Profile' rel='noopener noreferrer' target='_blank'>
                <img src='/images/pluralsight-icon.png' height='auto' width='50' alt='Pluralsight Icon'/>
            </a>
            {/* Fix Me - Need to add Pluralsight */}
            <h6>This website was designed and maintained by Leslie C. Bomar III.</h6>
        </footer>
    )
}

export default Footer;