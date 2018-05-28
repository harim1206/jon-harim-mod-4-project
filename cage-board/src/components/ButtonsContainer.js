import React from 'react'
import Button from './Button.js'
import '../css/style.css'



class ButtonsContainer extends React.Component{
  render(){
    
    const buttons = this.props.data.map((button)=>{
      return <Button id={button.id} pathVar={button.pathVar} handleClick={this.props.handleClick}/>
    })

    return(
      <div className="buttons-container">
        {buttons}
      </div>
    )
  }
}

export default ButtonsContainer
