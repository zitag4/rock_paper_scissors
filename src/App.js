import React, {Component} from 'react'
import './App.css'
import Button from './Components/Button'
import Result from './Components/Result'
import Modal from './Components/Modal'

const gameRules = require('./Assets/GameRules.json')

class App extends Component {
  state = {
    userChoice:  null,
    compChoice:  null,
    userScore:   0,
    compScore:   0,
    win:         null,
    showModal:   true,
    isModalOpen: true
  }

  //Show modal on load only once
  componentDidMount() {
    this.setState({ showModal: false })
  }

  renderModal = () => {
    if(this.state.isModalOpen) {
      return (
        <div className='Game_Rules'>
          <Modal gameRules={gameRules} />
          <Button onClick={this.resetGame.bind(this)}>Play</Button>
        </div>
      )
    }
  }

  //Randomly select an item
  getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors']
    let compChoice = choices[Math.floor(Math.random() * 3)]
    this.setState({ compChoice },
      () => this.game())
  }

  handleButtonClick = event => {
    this.setState({userChoice: event.target.value},
      () => this.getComputerChoice()
    )
  }

  renderResult = () => {
    const { userChoice, compChoice, win } = this.state

    switch(win) {
      case 'draw':
        return (
          <Result userChoice={userChoice}
          compChoice={compChoice}
          value='equal'
          >Draw</Result>
        )
      case 'user':
        return (
          <Result userChoice={userChoice}
          compChoice={compChoice}
          value='beats'
          >You won</Result>
        )
      case 'comp':
        return (
          <Result userChoice={userChoice}
          compChoice={compChoice}
          value='loses to'
          >You lost</Result>
        )
      default:
        return null
    }
  }

  //Defining game rules
  game = () => {
    const { userChoice, compChoice } = this.state

    if (userChoice === compChoice)
       this.setState({win: 'draw'})

    else if ((userChoice === 'Rock' && compChoice === 'Paper') ||
            (userChoice === 'Paper' && compChoice === 'Scissors') ||
            (userChoice === 'Scissors' && compChoice === 'Rock'))
            this.setState(prevState => ({win: 'comp', compScore: prevState.compScore + 1}))

    else this.setState( prevState => ({win: 'user', userScore: prevState.userScore + 1}))
  }

  resetGame = () => {
    this.setState({
      userChoice:  null,
      compChoice:  null,
      userScore:   0,
      compScore:   0,
      win:         null,
      isModalOpen: false
    })
  }

  render () {
    return (
      <div className="App">
        <header>Rock Paper Scissors</header>

        {this.renderModal()}
        
        <div className='Choices'>
          <div className='User_Choice'>
            <h2>Your choice</h2>
            <Button
              value='Rock'
              onClick={this.handleButtonClick.bind(this)}
            >Rock</Button>

            <Button
              value='Paper'
              onClick={this.handleButtonClick.bind(this)}
            >Paper</Button>

            <Button
              value='Scissors'
              onClick={this.handleButtonClick.bind(this)}
            >Scissors</Button>
          </div>

          <div>
            <h2>Computer choice</h2>
            <div className='Computer_Choice'>{this.state.compChoice}</div>
          </div>
        </div>

        <div className='Score'>
          <h1>Score</h1>
          {this.renderResult()}
          <h3>You {this.state.userScore} : {this.state.compScore} Computer</h3>
        </div>

        <Button
          value='Reset'
          onClick={this.resetGame.bind(this)}
        >Reset</Button>
      </div>
    )
  }
}

export default App
