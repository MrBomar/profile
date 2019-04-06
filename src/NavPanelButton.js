import React, {Component} from 'react';

class NavPanelButton extends Component{
    render(){
        return (
            <button className="NavPanelButton" action={this.props.action}>{this.props.text}</button>
        )
    }
}

export default NavPanelButton;