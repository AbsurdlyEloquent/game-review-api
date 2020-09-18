import React from "react"
import "../Cards/Cards.css"
import Accordion from "../Accordion/Accordion"
import CardTitle from "../Card-Title/Card-Title"
import CardBody from "../Card-Body/Card-Body"

export default function CardLight(props) {
    return (
        <div className="card-light">
            <CardTitle>{props.game.name}</CardTitle>
            <CardBody platform={props.game.platform} genre={props.game.genre} tags={props.game.tags}/>
            <Accordion />
        </div>
    )
}
