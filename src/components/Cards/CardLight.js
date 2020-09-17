import React from "react"
import "../Cards/Cards.css"
import Mac from "../Tags/Mac"
import Action from "../Tags/Action"
import MMORPG from "../Tags/MMORPG"
import PC from "../Tags/PC"
import Adventure from "../Tags/Adventure"
import Accordion from "../Accordion/Accordion"
import ReviewButton from "../Buttons/ReviewButton"

export default function CardLight() {
    return (
        <div className="card-light">
            <div className="card-title">
                <h2>Final Fantasy VI</h2>
                <div className="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star-half"></i>
                </div>
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
                <div className="btn">
                    <ReviewButton />
                </div>
            </div>
            <Accordion />
        </div>
    )
}