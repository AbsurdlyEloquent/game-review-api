import React from 'react'
import './Modal.css'

class ReviewModal extends React.Component {
  render() {
    return (
      <div className={`modal-wrapper ${this.props.active}`}>
        <div className='modal'></div>
      </div>
    )
  }
}

export default ReviewModal
