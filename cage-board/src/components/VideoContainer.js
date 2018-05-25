import React from 'react'
import Video from './Video.js'
import Sticker from './Sticker.js'
import '../css/style.css'


class VideoContainer extends React.Component{
  render(){
    return(
      <div className="video-container">
        {this.props.isClicked ? <Video/> : <Sticker/>}
      </div>
    )
  }
}

export default VideoContainer
