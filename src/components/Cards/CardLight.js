import React from "react"
import "../Cards/Cards.css"
import Mac from "../Tags/Mac"

export default function CardLight() {
    return (
        <div className="card-light">
            <div className="card-title"><h2>Final Fantasy VI</h2></div>
            <div className="card-body">
                <img src="https://images-na.ssl-images-amazon.com/images/I/51Ro%2BgfSjbL._AC_SX385_.jpg" alt="" />
                <div className="card-body-ul">
                    <ul>
                        <li className="li-tags">Platform: </li>
                        <li className="li-tags">Genre: </li>
                        <li className="li-tags">Tags: </li>
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