import React from 'react'

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
