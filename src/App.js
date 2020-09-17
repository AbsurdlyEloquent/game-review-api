import React from 'react';
import './App.css';
import CardLight from './components/Cards/CardLight';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navActive: true,
      burgerClass: 'close',
      navClass: 'active'
    }
    this.burgerHandler = this.burgerHandler.bind(this)
  }
  render() {
    return (
      <div className="App">
        <Header navActive={this.state.navActive} navClass={this.state.navClass} burgerClass={this.state.burgerClass} burgerHandler={this.burgerHandler} />
        <Nav navActive={this.state.navActive} navClass={this.state.navClass} burgerHandler={this.burgerHandler} />
        <Main />
      </div>
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
