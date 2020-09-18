import React from 'react'

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <h5>{this.props.type}:</h5>
        <input type="radio" name={this.props.type} id='rad1'/>
      </div>
    )
  }
}
