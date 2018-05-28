import React, { Component } from 'react';
import './App.css';
import ButtonsContainer from './components/ButtonsContainer.js'
import VideoContainer from './components/VideoContainer.js'
import data from './assets/data.js'

class App extends Component {

  state = {
    isClicked: false,
    currentPath: "",
  }

  handleClick = (id, e) => {

    this.setState({
      isClicked: true,
      currentPath: id
    })

  }

  render() {
    // console.log(`data: `, data)
    return (
      <div className="App">
        <VideoContainer isClicked={this.state.isClicked} currentPath={this.state.currentPath}/>
        <ButtonsContainer handleClick={this.handleClick} data={data}/>
      </div>
    );
  }
}

export default App;
