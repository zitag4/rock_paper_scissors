import React, { Component } from 'react'

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
