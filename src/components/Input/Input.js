import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ratings: this.props.ratings
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  render() {
    return (
      <div className="form">
        <h5>{this.props.type}</h5>
        <div className="radio-container">
          <input type="radio" name={this.props.type} id={`rad5-${this.props.index}`} value={5} onChange={this.changeHandler}/>
            <label htmlFor={`rad5-${this.props.index}`}>☆</label>
          <input type="radio" name={this.props.type} id={`rad4-${this.props.index}`} value={4} onChange={this.changeHandler}/>
            <label htmlFor={`rad4-${this.props.index}`}>☆</label>
          <input type="radio" name={this.props.type} id={`rad3-${this.props.index}`} value={3} onChange={this.changeHandler}/>
            <label htmlFor={`rad3-${this.props.index}`}>☆</label>
          <input type="radio" name={this.props.type} id={`rad2-${this.props.index}`} value={2} onChange={this.changeHandler}/>
            <label htmlFor={`rad2-${this.props.index}`}>☆</label>
          <input type="radio" name={this.props.type} id={`rad1-${this.props.index}`} value={1} onChange={this.changeHandler}/>
            <label htmlFor={`rad1-${this.props.index}`}>☆</label>
        </div>
      </div>
    )
  }
  changeHandler(e) {
    let newState = this.state
    newState.ratings[`${e.target.name.toLowerCase()}`] = e.target.value
    this.setState(newState)
  }
}
