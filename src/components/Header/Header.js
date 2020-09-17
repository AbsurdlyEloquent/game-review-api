import React from 'react'
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div id="hamburger" role="button" className={this.props.burgerClass} onClick={this.props.burgerHandler} >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="title">Insert cool thing here here</h1>
        <div className="user">
          <p>Insert username</p>
        </div>
      </header>
    )
  }
}

export default Header
