import React from 'react'
import Cage from '../assets/Cage.mp4'

class Video extends React.Component{
  render(){
    return(

      <video autoPlay>
        <source src={Cage} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    )
  }
}

export default Video
