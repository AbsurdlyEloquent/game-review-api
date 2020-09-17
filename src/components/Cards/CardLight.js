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
                        <li className="li-tags">Platform:&nbsp;<Mac />&nbsp;<PC /></li>
                        <li className="li-tags">Genre:&nbsp;<MMORPG /></li>
                        <li className="li-tags">Tags:&nbsp;<Action />&nbsp;<Adventure /></li>
                    </ul>
                </div>
            </div>
            <div className="card-footer">
                <button className="collapsible"><h4>Read More</h4>
                    <i className="fas fa-angle-double-down">
                    </i>
                </button>
            </div>
        </div>
    )
}
