import React, {Component} from 'react';
import './LinkButton.css';

class LinkButton extends Component{
    constructor(){
        super();
        this.clickLink = this.clickLink.bind(this);
    }
    clickLink(){
        window.open(this.props.link, "_blank");
    }
    render(){
        return(
            <div onClick={this.clickLink} className="linkButton" alt={this.props.alt}>
                <img src={this.props.image} alt={this.props.alt}/>
                <h5>{this.props.message}</h5>
            </div>
        )
    }
}

export default LinkButton;