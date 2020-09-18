import React from "react"
import Review from '../Review/Review'

export default function Accordion(props) {
  if (props.reviews.length > 0) {
    var returned = (props.reviews.map((item, i)=> {
      return (
        <Review
          key={i}
          difficulty={item.difficulty}
          gameplay={item.gameplay}
          graphics={item.graphics}
          overall={item.overall}
          replayability={item.replayability} />
      )
    }))
  } else {
    returned = (
      <h3>There's nothing here...</h3>
    )
  }
    return (
        <div className="card-Footer accordion arrows">
            <div className="accordion arrows">
                <input type="checkbox" name="accordion" id="cb1" />
                <section className="box">
                    <label className="box-title" htmlFor="cb1">Read More</label>
                    {returned}
                </section>
            </div>
        </div>
    )
}
