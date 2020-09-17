import React from 'react'

class LiBtn extends React.Component {
  render() {
    return (
      <li>
        <button className={this.props.className}>{this.props.children}</button>
      </li>
    )
  }
}

export default LiBtn
