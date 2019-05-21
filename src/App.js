import React, {Component} from 'react'
import './App.css'
import Button from './Components/Button'

class App extends Component {
  state = {
    userChoice: null,
    compChoice: null,
    userScore: 0,
    compScore: 0
  }

  getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors']
    let compChoice = choices[Math.floor(Math.random() * 3)]
    this.setState({ compChoice },
      () => this.game())
  }

  handleButtonClick = (event) => {
    this.setState({userChoice: event.target.value},
      () => {
        console.log(this.state.userChoice)
        this.getComputerChoice()
      })
  }

  game() {
    const { userChoice, compChoice } = this.state

    if (userChoice === compChoice)
       console.log(compChoice, userChoice, 'Draw')

    else if ((userChoice === 'Rock' && compChoice === 'Paper') ||
            (userChoice === 'Paper' && compChoice === 'Scissors') ||
            (userChoice === 'Scissors' && compChoice === 'Rock'))
            {
              this.setState( prevState => ({compScore: prevState.compScore + 1}),
              () => console.log(compChoice, userChoice, 'You lose', this.state.userScore, this.state.compScore))
            }

    else {
           this.setState( prevState => ({userScore: prevState.userScore + 1}),
           () => console.log(compChoice, userChoice, 'You won', this.state.userScore, this.state.compScore))
         }

  }

  render () {

    return (
      <div className="App">
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
