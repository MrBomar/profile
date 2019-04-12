import React, {Component} from 'react';

class NavSubButton extends Component{
    render(){
        let classes = "f6 link dim ph3 pv2 dib black bg-white bb bl br w-100";
        let newStyle = (this.props.display)?{display:"block"}:{display:"none"};
        return (
            <a className={classes} style={newStyle} href={this.props.action}>{this.props.text}</a>
        )
    };
}

export default NavSubButton;