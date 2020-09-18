import React from 'react'

export default class Input extends React.Component {
  render() {
    return (
      <div className="form">
        <h5>{this.props.type}</h5>
        <div className="radio-container">
          <input type="radio" name={this.props.type} id={`rad5-${this.props.index}`} value={5} />
            <label htmlFor={`rad5-${this.props.index}`}>☆</label>
          <input type="radio" name={this.props.type} id={`rad4-${this.props.index}`} value={4} />
            <label htmlFor={`rad4-${this.props.index}`}>☆</label>
          <input type="radio" name={this.props.type} id={`rad3-${this.props.index}`} value={3} />
            <label htmlFor={`rad3-${this.props.index}`}>☆</label>
          <input type="radio" name={this.props.type} id={`rad2-${this.props.index}`} value={2} />
            <label htmlFor={`rad2-${this.props.index}`}>☆</label>
          <input type="radio" name={this.props.type} id={`rad1-${this.props.index}`} value={1} />
            <label htmlFor={`rad1-${this.props.index}`}>☆</label>
        </div>
      </div>
    )
  }
}
