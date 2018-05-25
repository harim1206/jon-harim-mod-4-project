import React from 'react'
import Button from './Button.js'
import '../css/style.css'



class ButtonsContainer extends React.Component{
  render(){
    return(
      <div className="buttons-container">
        <Button handleClick={this.props.handleClick}/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </div>
    )
  }
}

export default ButtonsContainer
