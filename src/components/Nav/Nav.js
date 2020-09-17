import React from 'react'
import './Nav.css'

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navActive: this.props.navActive,
      navClass: this.props.navClass
    }
  }
  render() {
    return(
      <aside>
        <nav className={`nav ${this.state.navClass}`}>

        </nav>
      </aside>
    )
  }
}

export default Nav
