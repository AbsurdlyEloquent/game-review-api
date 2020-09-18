import React from "react"

export default function CardTitle(props) {
    return (
        <div className="card-title">
            <h2>{props.children}</h2>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star-half"></i>
            </div>
        </div>
    )
}
