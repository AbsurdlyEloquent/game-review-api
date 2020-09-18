import React from "react"
import ReviewButton from "../Buttons/ReviewButton"
import Tag from "../Tags/Tag"

export default function CardBody(props) {
    return (
        <div className="card-body">
            <img className="card-img" src="https://images-na.ssl-images-amazon.com/images/I/51Ro%2BgfSjbL._AC_SX385_.jpg" alt="" />
            <div className="card-body-ul">
                <ul className="card-ul">
                    <li className="li-tags">Platform:&nbsp;
                      { /* JS */
                        props.platforms.slice(0,5).map((item, i)=> {
                          return <Tag key={i}>{item}</Tag>
                        })
                      }
                    </li>
                    <li className="li-tags">Genre:&nbsp;<Tag>{props.genre}</Tag></li>
                    <li className="li-tags">Tags:&nbsp;
                      { /* JS */
                        props.tags.map((item, i)=> {
                          return <Tag key={i}>{item}</Tag>
                        })
                      }
                    </li>
                </ul>
            </div>
            <div className="btn">
                <ReviewButton game={props.game} index={props.index} />
            </div>
        </div>
    )
}
