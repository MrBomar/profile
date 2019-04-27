import React, { Component } from 'react';
import {Transition}  from 'react-transition-group';
import AboutMe from '../components/AboutMe';
import ArticleSearch from './ArticleSearch';
import NavMenu from './NavMenu';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.address = './profile/index.html';
    this.state = {currentObj:"",headerActive:false}
    this.timer = setInterval(() => {
      this.timeToLoad();
    }, 200);;
    this.time = "";
    this.menuNavigation = this.menuNavigation.bind(this);
  }
  timeToLoad(){
    if((document.readyState === 'complete')&&(this.state.currentObj === "")){
      this.setState({
        currentObj:<iframe id="intro" title="easy" className="appIframe" src={this.address}/>
      });
      if(this.time === "")this.time = new Date();
    } else if(this.time !== ""){
      if(new Date() - this.time  > 5000){
        this.setState({
          currentObj:<AboutMe/>,
          headerActive:true
        });
        clearInterval(this.timer);
      }
    }
  }
  menuNavigation = (text) => {
    switch(text){
      case "Projects":
        this.setState({currentObj:<ArticleSearch/>});
        break;
      case "About Me":
        this.setState({currentObj:<AboutMe/>});
        break;
      default:
        window.open('mailto:mrlesbomar@gmail.com');
    }
  }
  render() {
    return (
      <div className="App">
        <Transition timeout={0} in={this.state.headerActive} appear>
          {(status) => (
            <header className={`header white tl pa-2 shadow-3 header-${status}`}>
              <div id="headerTitle">
                <h1>Leslie C. Bomar</h1>
                <h2>Full Stack Web Application Developer</h2>
              </div>
              <NavMenu buttonClick={this.menuNavigation}/>
            </header>
          )}
        </Transition>
        {this.state.currentObj}
      </div>
    );
  }
}

export default App;
