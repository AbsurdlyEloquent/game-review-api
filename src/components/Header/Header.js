import React from 'react'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.burgerHandler)
    this.state = {
      navActive: this.props.navActive,
      burgerClass: this.props.burgerClass,
      navClass: this.props.navClass
    }
  }
  render() {
    return (
      <header className="header">
        <div id="hamburger" role="button" className={this.state.burgerClass} onClick={this.props.burgerHandler} >
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
