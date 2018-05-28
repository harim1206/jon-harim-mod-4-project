import React from 'react'





class Video extends React.Component{

  render(){
    return(
      <video autoPlay>
        <source src={this.props.currentVideo}
        type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

    )
  }
}

// <iframe width="560" height="315" src="https://www.youtube.com/embed/yUITg1raJW4?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

export default Video
