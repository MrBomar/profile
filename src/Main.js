import React, {Component} from 'react';
import Nav from './Nav';
import Profile from './Profile';
import navData from './data/navButtons';
import {CSSTransition} from 'react-transition-group';

class Main extends Component{
    constructor(){
        super();
        this.state = {display:<Profile/>};
    }
    render(){
        return(
            <div className="main">
                <div className="main-inner">
                    <header className="white bg-black tl pa-2 bb bt bw2 b-white">
                        <h2 className="dib ph3">Mr Leslie Bomar</h2>
                        <h4 className="dib ph3">Full Stack Web Application Developer</h4>
                    </header>
                    <Nav navData={navData}/>
                    <CSSTransition
                        in={true}
                        timeout={500}
                        className="my-node">
                    <main className="bg-white">
                        <h1>Profile</h1>
                        <hr></hr>
                        <p>This is where I get to yawn on about myself</p>
                    </main>
                    </CSSTransition>
                </div>
            </div>
        )
    }
}

export default Main;