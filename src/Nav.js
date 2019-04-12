import React, {Component} from 'react';
import NavMainButton from './NavMainButton';

class NavPanel extends Component{
    renderMainButtons(){
        return this.props.navData.map(btn=>{
            return <NavMainButton text={btn.text} action={btn.action} subButtons={btn.subButtons}/>
        })
    }
    render(){
        return(
            <nav className="bt">
                {this.renderMainButtons()}
            </nav>
        )
    }
}

export default NavPanel;