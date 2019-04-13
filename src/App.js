import React, { Component } from 'react';
import Main from './Main';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.address = 'http://www.mrlesbomar.com/profile/index.html';
    this.state = {currentObj:"", menuStatus:"closed"}
    this.timer = setInterval(() => {
      this.timeToLoad();
    }, 200);;
    this.time = "";
  }
  timeToLoad(){
    if((document.readyState === 'complete')&&(this.state.currentObj === "")){
      this.setState({currentObj:<iframe id="intro" title="easy" className="appIframe" src={this.address}/>});
      if(this.time === "")this.time = new Date();
    } else if(this.time !== ""){
      if(new Date() - this.time  > 5000){
        this.setState({currentObj:<Main/>});
        clearInterval(this.timer);
        // document.getElementsByTagName("header")[0].style.display = "grid";
        // document.getElementsByTagName("header")[0].style.top = "0px";
      }
    }
  }
  navButtonClick = (event) => {
    let menu = document.getElementById('navMenu');
    let menuButton = Array.from(document.getElementsByClassName('navButton'));
    let stat = "";
    if(this.state.menuStatus === "closed"){
      menu.classList.add("navMenuOpen");
      menuButton.forEach(btn=>btn.classList.add("fade-in"))
      stat = "open"
    } else {
      menu.classList.remove("navMenuOpen");
      menuButton.forEach(btn=>btn.classList.remove("fade-in"))
      stat = "closed"
    }
    this.setState({menuStatus:stat})
  }
  render() {
    return (
      <div className="App">
        <header className="white tl pa-2 shadow-3">
          <div className="ma3 fade-in">
            <h2 className="pa0 ma0 myName">Mr Leslie Bomar</h2>
            <h6 className="pa0 pl4 ma0">Full Stack Web Application Developer</h6>
          </div>
          <div>
            <button className="navOpen fr" onClick={this.navButtonClick}>&#9776;</button>
            <div id="navMenu" className="navMenu">
                <button className="navButton fr" onClick={this.navButtonClick}>About Me</button>
                <button className="navButton leftButton fr" onClick={this.navButtonClick}>Projects</button>
            </div>
          </div>
        </header>
          {this.state.currentObj}
      </div>
    );
  }
}

export default App;
