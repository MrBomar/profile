import React, { Component } from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import ArticleSearch from '../ArticleSearch/ArticleSearch';
import Animation from '../../components/Animation/Animation';
import Accomplishments from '../../components/Accomplishments/Accomplishments'
import './App.css';
import 'tachyons';
import Header from '../Header/Header';

class App extends Component {
  constructor(){
    super();
    this.state = {
      timerStart: '',
      animationMounted: false,
      currentObj: <Animation startCount={this.startCount}/>,
      mobileView: false,
      navMenuClosed: true,
    }
    this.timer = setInterval(() => {this.timeToLoad()}, 200);
    this.navButtonClick = this.navButtonClick.bind(this);
    this.toggleNavMenu = this.toggleNavMenu.bind(this);
    this.windowResizeEvent = this.windowResizeEvent.bind(this);
    this.closeNavMenu = this.closeNavMenu.bind(this);
  }

  startCount = () => {
    let start = new Date();
    this.setState({
      animationMounted: true,
      timerStart: start
    });
  }

  componentWillMount() {
    this.windowResizeEvent();
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowResizeEvent);
    window.addEventListener('orientationchange', this.windowResizeEvent);
  }

  windowResizeEvent = () => {
    if (window.innerWidth < 1050) {
      if(!this.state.mobileView)this.setState({mobileView:true, navMenuClosed: true});
    } else {
      if(this.state.mobileView)this.setState({mobileView:false, navMenuClosed: true});
    }
  }

  timeToLoad = () => {
    if(this.state.animationMounted === true && new Date() - this.state.timerStart > 5000){
      this.setState({
        animationMounted: false,
        currentObj: <AboutMe closeNavMenu={this.closeNavMenu}/>
      });
      clearInterval(this.timer);
    }
  }

  navButtonClick = (event) => {
    switch(event.target.innerText){
      case "Projects": 
        this.setState({currentObj: <ArticleSearch closeNavMenu={this.closeNavMenu}/>})
        break;
      case "About Me":
        this.setState({currentObj: <AboutMe closeNavMenu={this.closeNavMenu}/>});
        break;
      case "Contact Me":
        window.open('mailto:mrlesbomar@gmail.com');
        break;
      case "Accomplishments":
          this.setState({currentObj: <Accomplishments closeNavMenu={this.closeNavMenu}/>});
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
    if(this.state.animationMounted){
      return (this.state.currentObj)
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
