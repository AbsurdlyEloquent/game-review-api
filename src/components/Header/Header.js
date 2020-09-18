import React from 'react'

import Hamburger from '../Hamburger/Hamburger'

import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Hamburger burgerClass={this.props.burgerClass} burgerHandler={this.props.burgerHandler} />
        <h1 className="title">Zerg Rush Game Reviews</h1>
        <div className="user">
          <p>username</p>
        </div>
      </header>
    )
  }
}

export default Header
