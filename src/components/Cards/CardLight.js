import React from "react"
import "../Cards/Cards.css"
import Accordion from "../Accordion/Accordion"
import CardTitle from "../Card-Title/Card-Title"
import CardBody from "../CardBody/CardBody"

export default function CardLight(props) {
    return (
        <div className="card-light">
            <CardTitle>{props.game.name}</CardTitle>
            <CardBody platforms={props.game.platforms} genre={props.game.genre} tags={props.game.tags}/>
            <Accordion reviews={props.reviews} />
        </div>
    )
}
