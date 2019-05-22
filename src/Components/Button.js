import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Styles/ButtonStyle.css'

class Button extends Component {
  render() {
    const {value, onClick, children } = this.props;

    return (
      <button
        value={value}
        onClick={onClick}
        className='button'
      >{children}</button>
    )
  }
}

export default Button

Button.propTypes = {
  onClick:  PropTypes.func.isRequired,
  value:    PropTypes.string,
  children: PropTypes.string.isRequired
}
