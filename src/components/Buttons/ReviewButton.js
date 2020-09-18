import React from "react"
import ReviewModal from '../Modal/ReviewModal'
import "../Buttons/Buttons.css"

export default function ReviewButton() {
    return (
        <div className="rvw-btn">
            <button className="review-btn">Write a Review</button>
            <ReviewModal />
        </div>
    )
}
