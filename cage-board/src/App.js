import React, { Component } from 'react';
import './App.css';
import ButtonsContainer from './components/ButtonsContainer.js'
import VideoContainer from './components/VideoContainer.js'

class App extends Component {

  state = {
    isClicked: false
  }

  handleClick = () => {
    this.setState({
      isClicked: true
    })

  }

  render() {
    return (
      <div className="App">
        <VideoContainer isClicked={this.state.isClicked}/>
        <ButtonsContainer handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
