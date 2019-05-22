import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Styles/ModalStyle.css'

class Modal extends Component {
  render() {
    const {gameRules} = this.props

    return(
      <div className='modal'>
        <h1>{gameRules.title}</h1>
        <p>{gameRules.textRock}</p>
        <p>{gameRules.textPaper}</p>
        <p>{gameRules.textScissors}</p>
      </div>
    )
  }
}

export default Modal

Modal.propTypes = {
  gameRules: PropTypes.object.isRequired
}
