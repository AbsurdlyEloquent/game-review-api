import React from "react"
import "../Cards/Cards.css"

import Mac from '../Tags/Mac'
import PC from '../Tags/PC'
import MMORPG from '../Tags/MMORPG'
import Action from '../Tags/Action'
import Adventure from '../Tags/Adventure'

export default function CardLight() {
    return (
        <div className="card-light">
            <div className="card-title">
              <h2>Final Fantasy VI</h2>
              <button className="review-btn">Write a review</button>
            </div>
            <div className="card-body">
                <img className="card-img" src="https://images-na.ssl-images-amazon.com/images/I/51Ro%2BgfSjbL._AC_SX385_.jpg" alt="" />
                <div className="card-body-ul">
                    <ul className="card-ul">
                        <li className="li-tags">PlatForm:&nbsp;<Mac />&nbsp;<PC /></li>
                        <li className="li-tags">Genre:&nbsp;<MMORPG /></li>
                        <li className="li-tags">Tags:&nbsp;<Action />&nbsp;<Adventure /></li>
                    </ul>
                </div>
            </div>
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
        </div>
    )
}
