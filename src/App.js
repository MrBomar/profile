import React, { Component } from 'react';
import Main from './Main';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.address = 'http://www.mrlesbomar.com/profile/index.html';
    this.state = {currentObj:""}
    this.timer = setInterval(() => {
      this.timeToLoad();
    }, 200);;
    this.time = "";
  }
  timeToLoad(){
    if((document.readyState === 'complete')&&(this.state.currentObj === "")){
      this.setState({currentObj:<iframe title="easy" class="appIframe" src={this.address}/>});
      this.time = new Date();
    } else if(this.time !== ""){
      if(new Date() - this.time  > 5000){
        this.setState({currentObj:<Main />});
        this.timer = "";
      }
    }

  }
  render() {
    return (
      <div>
        {this.state.currentObj}
      </div>
    );
  }
}

export default App;
