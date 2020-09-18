import React from 'react'
import './Modal.css'
import Input from '../Input/Input'

class ReviewModal extends React.Component {
  render() {
    return (
      <div className={`modal-wrapper ${this.props.active}`} onClick={this.props.reviewHandler}>
        <div className='modal'>
          <div className='modal-header'></div>
          <div className='modal-body'>
            <form>
              <Input type='Overall' index={`${this.props.index}-o`} />
              <Input type='Difficulty' index={`${this.props.index}-d`} />
              <Input type='Gameplay' index={`${this.props.index}-g`} />
              <Input type='Graphics' index={`${this.props.index}-gr`} />
              <Input type='Replayability' index={`${this.props.index}-r`} />
            </form>
          </div>
          <div className='modal-footer'></div>
        </div>
      </div>
    )
  }
}

export default ReviewModal
