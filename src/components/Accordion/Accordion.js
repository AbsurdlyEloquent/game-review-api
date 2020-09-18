import React from "react"
import Review from '../Review/Review'

export default function Accordion() {
    return (
        <div className="card-Footer accordion arrows">
            <div className="accordion arrows">
                <input type="radio" name="accordion" id="cb1" />
                <section className="box">
                    <label className="box-title" htmlFor="cb1">Read More</label>
                    <label className="box-close" htmlFor="acc-close"></label>
                    <Review />
                </section>
                <input type="radio" name="accordion" id="acc-close" />
            </div>
        </div>
    )
}
