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
              <Input type='overall' />
              <Input type='difficulty' />
              <Input type='gameplay' />
              <Input type='graphics' />
              <Input type='replayability' />
            </form>
          </div>
          <div className='modal-footer'></div>
        </div>
      </div>
    )
  }
}

export default ReviewModal
