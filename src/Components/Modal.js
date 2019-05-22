import React, { Component } from 'react'
import './Styles/ModalStyle.css'
import Button from './Button'


class Modal extends Component {
  render() {
    const { title, textRock, textPaper, textScissors } = this.props
    return(
      <div className='modal'>
        <h1>{title}</h1>
        <p>{textRock}</p>
        <p>{textPaper}</p>
        <p>{textScissors}</p>
      </div>
    )
  }
}

export default Modal
