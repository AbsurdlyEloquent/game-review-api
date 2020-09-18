import React from 'react'
const axios = require('axios')

export default function Review(props) {
  return (
    <div className="box-content">
      <div className="content-box">
        <h2 className="h2-title">Review By Gamer<span onClick={()=>deleteReview(props.id)}><i className="fa fa-trash"></i></span></h2>
        <ul>
          <li>Overall: {props.overall}</li>
          <li>Difficulty: {props.difficulty}</li>
          <li>Graphics: {props.graphics}</li>
          <li>Gameplay: {props.gameplay}</li>
          <li>Replayability: {props.replayability}</li>
          <li>Comments: {props.comments}</li>
        </ul>
      </div>
    </div>
  )
}

async function deleteReview(id) {
  try {
    let response = await axios.delete(`https://zr-review-api.herokuapp.com/reviews/${id}`)
      console.log(response)
  }
  catch (err) {
    console.error(err)
  }
}
