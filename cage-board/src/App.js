import React, { Component } from 'react';
import './App.css';
import ButtonsContainer from './components/ButtonsContainer.js'
import VideoContainer from './components/VideoContainer.js'
import Hello from './assets/Hello.mp4'
// import * as video from './assets/'

const fakeVideoData = [
  { id: 1, url: '', }
]
// write a function that takes in the videos and outputs this object
//object = { 1: video1, 2: video2}
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
    console.log(`videos: `, Hello)
    return (
      <div className="App">
        <VideoContainer isClicked={this.state.isClicked}/>
        <ButtonsContainer handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
