import React from 'react'
import './Hamburger.css'

class Hamburger extends React.Component {
  render() {
    return (
      <div id="hamburger" role="button" className={this.props.burgerClass} onClick={this.props.burgerHandler} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}

export default Hamburger
