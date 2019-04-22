import React, {Component} from 'react';
import './NavMenu.css';

class NavMenu extends Component {
    constructor(){
        super();
        this.state = {menuStatus:"navClosed"};
        this.activateMenu = this.activateMenu.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }
    activateMenu = () => {
        if(this.state.menuStatus === "navClosed"){
            this.setState({menuStatus:"navOpen"})
        } else {
            this.setState({menuStatus:"navClosed"})
        }
    }
    buttonClick = (event) => {
        console.log("Click");
        this.activateMenu();
        this.props.buttonClick(event.target.innerText);
    }
    render(){
        return(
            <nav>
                <button id="hamburgerButton" className="navButton" onClick={this.activateMenu}>&#9776;</button>
                <div id="navMenu" className={"navMenu " + this.state.menuStatus}>
                    <button key="navButton1" className="navButton hide" onClick={this.buttonClick}>Projects</button>
                    <button key="navButton2" className="navButton hide" onClick={this.buttonClick}>About Me</button>
                    <button key="navButton3" className="navButton hide" onClick={this.buttonClick}>Contact Me</button>
                </div>
            </nav>
        )
    }
}

export default NavMenu;