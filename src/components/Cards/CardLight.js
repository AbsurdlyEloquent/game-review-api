import React from "react"
import "../Cards/Cards.css"
import Accordion from "../Accordion/Accordion"
import CardTitle from "../Card-Title/Card-Title"
import CardBody from "../CardBody/CardBody"

export default function CardLight(props) {
    return (
        <div className="card-light">
            <CardTitle>{props.game.name}</CardTitle>
            <CardBody game={props.game} platforms={props.game.platforms} genre={props.game.genre} tags={props.game.tags} index={props.index} />
            <Accordion reviews={props.game.reviews} index={props.index} />
        </div>
    )
}
