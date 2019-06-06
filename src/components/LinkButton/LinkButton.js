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
            <button type="button" onClick={this.clickLink} className="linkButton" href={this.props.link} alt={this.props.alt} target="_blank">
                <img src={this.props.image} alt={this.props.alt}/>
                <h5>{this.props.message}</h5>
            </button>
        )
    }
}

export default LinkButton;