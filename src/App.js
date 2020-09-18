import React from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navActive: false,
      burgerClass: '',
      navClass: '',
      games: null
    }
    this.burgerHandler = this.burgerHandler.bind(this)
  }
  async componentDidMount() {
    try {
      let response = await axios.get('https://zr-review-api.herokuapp.com/games')
      this.setState({ games: response.data })
      console.log(this.state)
    }
    catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      <div className="App">
        <Header navActive={this.state.navActive} navClass={this.state.navClass} burgerClass={this.state.burgerClass} burgerHandler={this.burgerHandler} />
        <Nav navActive={this.state.navActive} navClass={this.state.navClass} burgerHandler={this.burgerHandler} />
<<<<<<< HEAD
        <CardLight />
      </div >
=======
        <Main games={this.state.games} />
      </div>
>>>>>>> master
    )
  }
  burgerHandler = function () {
    let newState = this.state
    if (newState.navActive) {
      newState.navActive = false
      newState.burgerClass = ''
      newState.navClass = ''
    } else {
      newState.navActive = true
      newState.burgerClass = 'close'
      newState.navClass = 'active'
    }
    this.setState(newState)
  }
}

export default App;
