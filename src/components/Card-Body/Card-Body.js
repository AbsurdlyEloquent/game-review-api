import React from "react"
import ReviewButton from "../Buttons/ReviewButton"
import Mac from "../Tags/Mac"
import Action from "../Tags/Action"
import MMORPG from "../Tags/MMORPG"
import PC from "../Tags/PC"
import Adventure from "../Tags/Adventure"

export default function CardBody() {
    return (
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
    )
}