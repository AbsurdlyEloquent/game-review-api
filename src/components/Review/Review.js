import React from 'react'

export default function Review(props) {
  return (
    <div className="box-content">
      <div className="content-box">
        <h2 className="h2-title">Review By Gamer</h2>
        <ul>
          <li>Overall: {props.overall}</li>
          <li>Difficulty: {props.difficulty}</li>
          <li>Graphics: {props.graphics}</li>
          <li>Gameplay: {props.gameplay}</li>
          <li>Replayability: {props.replayability}</li>
        </ul>
      </div>
    </div>
  )
}
