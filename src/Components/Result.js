import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Result extends Component {
  render() {
    const { userChoice, compChoice, value, children } = this.props

    return(
      <div>
        <h2>{userChoice} {value} {compChoice}</h2>
        <h2>{children}</h2>
      </div>
    )
  }
}

export default Result

Result.propTypes = {
  userChoice: PropTypes.string.isRequired,
  compChoice: PropTypes.string.isRequired,
  value:      PropTypes.string.isRequired,
  children:   PropTypes.string.isRequired
}
