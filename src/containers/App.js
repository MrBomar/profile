import React, { Component } from 'react';
import AboutMe from '../components/AboutMe';
import ArticleSearch from './ArticleSearch';
import NavMenu from './NavMenu';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.address = './profile/index.html';
    this.state = {currentObj:""}
    this.timer = setInterval(() => {
      this.timeToLoad();
    }, 200);;
    this.time = "";
    this.menuNavigation = this.menuNavigation.bind(this);
  }
  timeToLoad(){
    if((document.readyState === 'complete')&&(this.state.currentObj === "")){
      this.setState({currentObj:<iframe id="intro" title="easy" className="appIframe" src={this.address}/>});
      if(this.time === "")this.time = new Date();
    } else if(this.time !== ""){
      if(new Date() - this.time  > 5000){
      document.getElementsByTagName("header")[0].classList.add("showHeader");
      document.getElementsByTagName("main")[0].classList.add("showMain");
      this.setState({currentObj:<AboutMe/>});
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
        <header className="white tl pa-2 shadow-3">
          <div id="headerTitle">
            <h1>Leslie C. Bomar</h1>
            <h2>Full Stack Web Application Developer</h2>
          </div>
          <NavMenu buttonClick={this.menuNavigation}/>
        </header>
        <main>
          {this.state.currentObj}
        </main>
      </div>
    );
  }
}

export default App;
