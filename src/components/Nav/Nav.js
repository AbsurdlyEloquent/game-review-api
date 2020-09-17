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
    return(
      <aside className={`navWrapper ${this.props.navClass}`} onClick={this.navClicker} >
        <nav className={`nav ${this.props.navClass}`}>
          <ul className="navList">
            <LiBtn className="navButton">Home</LiBtn>
            <LiBtn className="navButton">Lorem</LiBtn>
            <LiBtn className="navButton">Ipsum</LiBtn>
          </ul>
          <Footer />
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
