import React from 'react'
import './Modal.css'
import Input from '../Input/Input'
const axios = require('axios')

class ReviewModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ratings: {}
    }
    this.submitHandler = this.submitHandler.bind(this)
  }
  render() {
    return (
      <div className={`modal-wrapper ${this.props.active}`} onClick={this.props.reviewHandler}>
        <div className='modal'>
          <div className='modal-header'>&times;</div>
          <div className='modal-body'>
            <form>
              <Input ratings={this.state.ratings} type='Overall' index={`${this.props.index}-o`} />
              <Input ratings={this.state.ratings} type='Difficulty' index={`${this.props.index}-d`} />
              <Input ratings={this.state.ratings} type='Gameplay' index={`${this.props.index}-g`} />
              <Input ratings={this.state.ratings} type='Graphics' index={`${this.props.index}-gr`} />
              <Input ratings={this.state.ratings} type='Replayability' index={`${this.props.index}-r`} />
            </form>
          </div>
          <div className='modal-footer'><input onClick={this.submitHandler} type='submit'/></div>
        </div>
      </div>
    )
  }
  async submitHandler() {
    let ratings = this.state.ratings
    try {
      let newReview = await axios.post('https://zr-review-api.herokuapp.com/reviews', ratings)
      console.log(newReview)
      let newGame = await axios.put(`https://zr-review-api.herokuapp.com/games/${this.props.game._id}`, {"$push": { "reviews": newReview.data._id}})
      console.log(newGame)
      this.setState({ ratings: {} })
    }
    catch (err) {
      console.error(err)
    }
  }
}

export default ReviewModal
