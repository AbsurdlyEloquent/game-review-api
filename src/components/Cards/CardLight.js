import React from "react"
import "../Cards/Cards.css"
import Accordion from "../Accordion/Accordion"
import CardTitle from "../Card-Title/Card-Title"
import CardBody from "../Card-Body/Card-Body"

export default function CardLight() {
    return (
        <div className="card-light">
            <CardTitle />
            <CardBody />
            <Accordion />
        </div>
    )
}
