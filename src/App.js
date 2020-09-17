import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navActive: true,
      burgerClass: '',
      navClass: ''
    }
    this.burgerHandler = this.burgerHandler.bind(this)
  }
  render() {
    return (
      <div className="App">
        <Header navActive={this.state.navActive} navClass={this.state.navClass} burgerHandler={this.burgerHandler} />
        <Nav navActive={this.state.navActive} navClass={this.state.navClass} />
      </div>
    )
  }
  burgerHandler() {
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
  }
}

export default App;
