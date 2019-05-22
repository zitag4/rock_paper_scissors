import React, {Component} from 'react'
import './ButtonStyle.css'

class Button extends Component {
  render() {
    const {value, onClick, children } = this.props;

    return (
      <button value={value} onClick={onClick} className='button'>{children}</button>
    )
  }
}

export default Button
