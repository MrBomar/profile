import React, {Component} from 'react';
import NavSubButton from './NavSubButton';

class NavPanelButton extends Component{
    constructor(){
        super();
        this.state = {
            open:false,
        }
        this.changeSubButtonDisplay = this.changeSubButtonDisplay.bind(this);
    }
    changeSubButtonDisplay(){
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render(){
        let childs = this.props.subButtons.map(btn=>{
            return <NavSubButton action={btn.action} display={this.state.open} text={btn.text}/>
        })
        let classes ="f6 link dim ph3 pv2 dib black bg-cust-gold bl br bb w-100";
        return (
            <div>
                <a className={classes} onClick={this.changeSubButtonDisplay} action={this.props.action}>{this.props.text}</a>
                {childs}
            </div>
        )
    }
}

export default NavPanelButton;