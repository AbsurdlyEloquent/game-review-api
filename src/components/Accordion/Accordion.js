import React from "react"

export default function Accordion() {
    return (
        <div className="card-Footer accordion arrows">
            <div className="accordion arrows">
                <input type="radio" name="accordion" id="cb1" />
                <section className="box">
                    <label className="box-title" htmlFor="cb1">Read More</label>
                    <label className="box-close" htmlFor="acc-close"></label>
                    <div className="box-content">
                        <div className="content-box">
                            <h2 className="h2-title">Review By User</h2>
                            <ul>
                                <li>Overall: Epic!</li>
                                <li>Difficulty: Epic!</li>
                                <li>Graphics: It was the 2000s...</li>
                                <li>Gameplay: Epic!</li>
                                <li>Replayability: Hell yea!</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <input type="radio" name="accordion" id="acc-close" />
            </div>
        </div>
    )
}