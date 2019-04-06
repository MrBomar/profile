import React, {Component} from 'react';
import NavPanel from './NavPanel';
import Profile from './Profile';

class Main extends Component{
    constructor(){
        super();
        this.state = {display:<Profile/>};
    }
    changeView(item){

    }
    render(){
        return(
            <div class="main">
                <NavPanel action={this.changeView}/>
                {this.state.display}
            </div>
        )
    }
}

export default Main;