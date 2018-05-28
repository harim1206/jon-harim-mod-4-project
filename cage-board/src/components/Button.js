import React from 'react'
import '../css/style.css'

class Button extends React.Component{
  render(){
    return(
      <div className="button" onClick={(e)=>this.props.handleClick(this.props.id, e)}>
        <a>This is a button</a>

      </div>
    )
  }
}

export default Button
