import React from "react"
import ReviewModal from '../Modal/ReviewModal'
import "../Buttons/Buttons.css"

export default class ReviewButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalActive: ''
    }
    this.reviewHandler = this.reviewHandler.bind(this)
  }
  render() {
    return (
      <div className="rvw-btn">
        <button onClick={this.reviewHandler} className="review-btn">Write a Review</button>
          <ReviewModal game={this.props.game} active={this.state.modalActive} reviewHandler={this.reviewHandler} index={this.props.index} />
      </div>
    )
  }
  reviewHandler(e) {
    if (e.target.className === 'review-btn') {
      this.setState({ modalActive:'active' })
    } else if (e.target.className === 'modal-wrapper active' || e.target.className === "modal-header") {
      this.setState({ modalActive:'' })
    }
  }
}
