import React from 'react'
import './LiBtn.css'

class LiBtn extends React.Component {
  render() {
    return (
      <li className="LiBtn">
        <button className={this.props.className}>{this.props.children}</button>
      </li>
    )
  }
}

export default LiBtn
