import React from 'react'
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
            <li><button className="navButton">Home</button></li>
            <li><button className="navButton">Lorem</button></li>
            <li><button className="navButton">Ipsum</button></li>
          </ul>
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
