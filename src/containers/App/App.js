import React, { Component } from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import ArticleSearch from '../ArticleSearch/ArticleSearch';
import Animation from '../../components/Animation/Animation';
import './App.css';
import 'tachyons';
import Header from '../Header/Header';

class App extends Component {
  constructor(){
    super();
    this.state = {
      intro: true,
      currentObj: "",
      mobileView: false,
      navMenuClosed: true,
    }
    this.timer = setInterval(() => {
      this.timeToLoad();
    }, 200);;
    this.time = "";
    this.timeToLoad = this.timeToLoad.bind(this);
    this.navButtonClick = this.navButtonClick.bind(this);
    this.toggleNavMenu = this.toggleNavMenu.bind(this);
    this.windowResizeEvent = this.windowResizeEvent.bind(this);
    this.closeNavMenu = this.closeNavMenu.bind(this);
  }

  componentWillMount() {
    this.windowResizeEvent();
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowResizeEvent);
    window.addEventListener('orientationchange', this.windowResizeEvent);
  }

  windowResizeEvent = () => {
    if (window.innerWidth < 900) {
      if(!this.state.mobileView)this.setState({mobileView:true, navMenuClosed: true});
    } else {
      if(this.state.mobileView)this.setState({mobileView:false, navMenuClosed: true});
    }
  }

  timeToLoad(){
    if((document.readyState === 'complete')&&(this.state.currentObj === "")){
      this.setState({
        currentObj:<Animation/>
      });
      if(this.time === "")this.time = new Date();
    } else if(this.time !== ""){
      if(new Date() - this.time  > 5000){
        this.setState({
          intro: false,
          currentObj:<AboutMe closeNavMenu={this.closeNavMenu}/>
        });
        clearInterval(this.timer);
      }
    }
  }

  navButtonClick = (event) => {
    switch(event.target.innerText){
      case "Projects":
        this.setState({currentObj:<ArticleSearch closeNavMenu={this.closeNavMenu}/>});
        break;
      case "About Me":
        this.setState({currentObj:<AboutMe closeNavMenu={this.closeNavMenu}/>});
        break;
      case "Contact Me":
        window.open('mailto:mrlesbomar@gmail.com');
        break;
      default:;
    }
    this.toggleNavMenu();
  }

  closeNavMenu = () => {
    if(this.state.navMenuClosed === false)this.setState({navMenuClosed:true});
  }

  toggleNavMenu(){
    this.setState({navMenuClosed:!this.state.navMenuClosed});
  }

  render() {
    if(this.state.intro){
      return (<Animation/>)
    } else {
      return (
        <div id="App">
          <Header 
            mobileView={this.state.mobileView}
            navMenuClosed={this.state.navMenuClosed}
            closeNavMenu={this.closeNavMenu}
            navButtonClick={this.navButtonClick}/>
          {this.state.currentObj}
        </div>
      );
    }
  }
}

export default App;
