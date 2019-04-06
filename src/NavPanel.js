import React, {Component} from 'react';
import NavPanelButton from './NavPanelButton';

class NavPanel extends Component{
    constructor(){
        super();
        this.state = {
            buttons:[
                {action:this.currentButtons, text:"Profile"},
                {action:this.currentButtons, text:"Professional Projects"},
                {action:this.currentButtons, text:"Personal Projects"}
            ]
        };
    }
    currentButtons(){
        return this.state.buttons.map(item=>{
            return <NavPanelButton action={item.action} text={item.text}/>
        })
    }
    render(){
        return(
            <div className="nav">
                {this.currentButtons()}
            </div>
        )
    }
}

export default NavPanel;