import React from "react"
import ReviewModal from '../Modal/ReviewModal'
import "../Buttons/Buttons.css"

export default class ReviewButton extends React.Component {
  render() {
    return (
      <div className="rvw-btn">
        <button className="review-btn">Write a Review</button>
          <ReviewModal />
      </div>
    )
  }
}
