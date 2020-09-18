import React from "react"
import Review from '../Review/Review'

export default function Accordion(props) {
  // If there are reviews,
  if (props.reviews.length > 0) {
    // maps through the reviews and
    var returned = (props.reviews.map((item, i)=> {
      return (
        <Review
          id={item._id}
          key={i}
          difficulty={item.difficulty}
          gameplay={item.gameplay}
          graphics={item.graphics}
          overall={item.overall}
          replayability={item.replayability}
          comments={item.comments} />
      )
    }))
  } else {
    returned = (
      <h3 className="noArray">There's nothing here...🥺</h3>
    )
  }
    return (
        <div className="card-Footer accordion arrows">
            <div className="accordion arrows">
                <input type="checkbox" name="accordion" id={`cb${props.index}`} />
                <section className="box">
                    <label className="box-title" htmlFor={`cb${props.index}`}>Read More</label>
                    {returned}
                </section>
            </div>
        </div>
    )
}
