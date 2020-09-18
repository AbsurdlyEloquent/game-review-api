import React from 'react'

import LiBtn from '../LiBtn/LiBtn'
import Footer from '../Footer/Footer'

import './Nav.css'

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.navClicker = this.navClicker.bind(this)
  }
  render() {
    return (
      <aside className={`navWrapper ${this.props.navClass}`} onClick={this.navClicker} >
        <nav className={`nav ${this.props.navClass}`}>
          <ul className="navList">
            <LiBtn className={`navButton ${this.props.navClass}`}>Home</LiBtn>
            <LiBtn className={`navButton ${this.props.navClass}`}>Lorem</LiBtn>
            <LiBtn className={`navButton ${this.props.navClass}`}>Ipsum</LiBtn>
            <LiBtn className={`navButton ${this.props.navClass}`}>Add a Game</LiBtn>
          </ul>
          <Footer className={`navButton ${this.props.navClass}`} />
        </nav>
      </aside>
    )
  }
  navClicker(e) {
    if (e.target.className === 'navWrapper active') {
      this.props.burgerHandler()
    }
  }
}

export default Nav
