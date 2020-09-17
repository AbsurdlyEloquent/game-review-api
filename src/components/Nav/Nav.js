import React from 'react'
import './Nav.css'

class Nav extends React.Component {
  render() {
    return(
      <aside className="navWrapper">
        <nav className={`nav ${this.props.navClass}`}>

        </nav>
      </aside>
    )
  }
}

export default Nav
