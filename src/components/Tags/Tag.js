import React from "react"
import "./Tags.css"

export default function Tag(props) {
    return (
        <p className="tags">{props.children}</p>
    )
}
