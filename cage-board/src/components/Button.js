import React from 'react'
import '../css/style.css'

class Button extends React.Component{
  render(){
    return(
      <div className="button" onClick={this.props.handleClick}>
        <a>This is a button</a>

      </div>
    )
  }
}

export default Button
