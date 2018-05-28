import React from 'react'
import Video from './Video.js'
import Sticker from './Sticker.js'
import '../css/style.css'

import video1 from "../assets/videos/That's all you had to do.mp4"
import video2 from "../assets/videos/Cage.mp4"
import video3 from "../assets/videos/ABC.mp4"
import video4 from "../assets/videos/Hello.mp4"
import video5 from "../assets/videos/retard.mp4"
import video6 from "../assets/videos/Yeah.mp4"


class VideoContainer extends React.Component{
  state = {
    videos: [video1, video2, video3]
  }


  render(){
    const currentVideo = this.state.videos[this.props.currentPath-1]

    console.log(`currentVideo: `, currentVideo)
    return(
      <div className="video-container">
        {this.props.isClicked ? <Video currentVideo={currentVideo}/> : <Sticker/>}
      </div>
    )
  }
}

export default VideoContainer
