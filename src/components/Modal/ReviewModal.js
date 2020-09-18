import React from 'react'
import './Modal.css'
import Input from '../Input/Input'

class ReviewModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ratings: {}
    }
  }
  render() {
    return (
      <div className={`modal-wrapper ${this.props.active}`} onClick={this.props.reviewHandler}>
        <div className='modal'>
          <div className='modal-header'>&times;</div>
          <div className='modal-body'>
            <form>
              <Input ratings={this.state.ratings} type='Overall' index={`${this.props.index}-o`} />
              <Input ratings={this.state.ratings} type='Difficulty' index={`${this.props.index}-d`} />
              <Input ratings={this.state.ratings} type='Gameplay' index={`${this.props.index}-g`} />
              <Input ratings={this.state.ratings} type='Graphics' index={`${this.props.index}-gr`} />
              <Input ratings={this.state.ratings} type='Replayability' index={`${this.props.index}-r`} />
            </form>
          </div>
          <div className='modal-footer'><input type='submit'/></div>
        </div>
      </div>
    )
  }
}

export default ReviewModal
