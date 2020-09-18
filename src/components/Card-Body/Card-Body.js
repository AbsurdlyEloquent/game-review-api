import React from "react"
import ReviewButton from "../Buttons/ReviewButton"
import Tag from "../Tags/Tag"

export default function CardBody() {
    return (
        <div className="card-body">
            <img className="card-img" src="https://images-na.ssl-images-amazon.com/images/I/51Ro%2BgfSjbL._AC_SX385_.jpg" alt="" />
            <div className="card-body-ul">
                <ul className="card-ul">
                    <li className="li-tags">Platform:&nbsp;<Tag>Mac</Tag>&nbsp;<Tag>PC</Tag></li>
                    <li className="li-tags">Genre:&nbsp;<Tag>MMORPG</Tag></li>
                    <li className="li-tags">Tags:&nbsp;<Tag>Adventure</Tag>&nbsp;<Tag>Action</Tag></li>
                </ul>
            </div>
            <div className="btn">
                <ReviewButton />
            </div>
        </div>
    )
}
