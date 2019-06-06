import React, {Component} from 'react';
import NavDropMenu from '../../components/NavDropMenu/NavDropMenu';
import NavButtonMenu from '../../components/NavButtonMenu/NavButtonMenu';
import NavButton from '../../components/NavButton/NavButton';
import './Header.css';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {
                buttonId: 'aboutMeButton',
                buttonText: 'About Me'
            },
            {
                buttonId: 'accomplishmentsButton',
                buttonText: 'Accomplishments'
            },
            {
                buttonId: 'contactMeButton',
                buttonText: 'Contact Me'
            },
            {
                buttonId: 'projectsButton',
                buttonText: 'Projects'
            }
        ]
    }

    renderButtons = () => {
        return this.buttons.map(btn => {
            return <NavButton
                        key={btn.buttonId}
                        buttonId={btn.buttonId}
                        buttonClick={this.props.navButtonClick}
                        buttonText={btn.buttonText}
                    />
        })
    }

    render(){
        return (
            <header>
                <div id="myTitle" onClick={this.props.closeNavMenu}>
                    <h1>Leslie C. Bomar</h1>
                    <h2>Full Stack Web Developer</h2>
                </div>
                {(this.props.mobileView)?
                    <NavDropMenu 
                        navMenuClosed={this.props.navMenuClosed}
                        navButtonClick={this.props.navButtonClick}
                        renderButtons={this.renderButtons}
                    />:
                    <NavButtonMenu
                        renderButtons={this.renderButtons}
                    />}
            </header>
        )
    }
}