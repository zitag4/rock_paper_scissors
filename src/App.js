import React, {Component} from 'react'
import './App.css'
import Button from './Components/Button'

class App extends Component {
  state = {
    userChoice: null
  }

  getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    let compChoice = choices[Math.floor(Math.random() * 3)]
    return compChoice
  }

  handleButtonClick = (event) => {
    this.getComputerChoice()
    this.setState({userChoice: event.target.value},
      () => console.log(this.state.userChoice))
  }

  game() {
    const compChoice = this.getComputerChoice()
    if (this.state.userChoice === compChoice)
      console.log(compChoice, this.state.userChoice, 'Draw')

    else if ((this.state.userChoice === 'Rock' && compChoice === 'Paper') ||
            (this.state.userChoice === 'Paper' && compChoice === 'Scissors') ||
            (this.state.userChoice === 'Scissors' && compChoice === 'Rock'))
            console.log(compChoice, this.state.userChoice, 'You lose')

    else console.log(compChoice, this.state.userChoice, 'You won')

  }

  render () {

    return (
      <div className="App">
        {this.game()}
        <Button
          value='Rock'
          onClick={ this.handleButtonClick.bind(this)}
        >Rock</Button>

        <Button
          value='Paper'
          onClick={ this.handleButtonClick.bind(this)}
        >Paper</Button>

        <Button
          value='Scissors'
          onClick={ this.handleButtonClick.bind(this)}
        >Scissors</Button>
      </div>
    )
  }
}

export default App
