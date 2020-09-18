import React from 'react'

class ReviewModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      game: this.props.game,
      active: this.props.active
    }
  }
  render() {
    return (
      <div className='modal-wrapper'>
        <div className='modal'></div>
      </div>
    )
  }
}

export default ReviewModal
