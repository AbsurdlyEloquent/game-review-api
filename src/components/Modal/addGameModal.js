import React from 'react'
import './Modal.css'
import Input from '../Input/Input'
const axios = require('axios')

class AddGameModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            games: {}
        }
        this.submitHandler = this.submitHandler.bind(this)
    }
    render() {
        return (
            <div className={`modal-wrapper ${this.props.active}`} onClick={this.props.gameHandler}>
                <div className='modal'>
                    <div className='modal-header'>&times;</div>
                    <div className='modal-body'>
                        <form>
                            <Input type='text' index={`${this.props.index}`} />
                            <Input type='text' index={`${this.props.index}`} />
                            <Input type='text' index={`${this.props.index}`} />
                            <Input type='text' index={`${this.props.index}`} />
                            <Input type='text' index={`${this.props.index}`} />
                        </form>
                    </div>
                    <div className='modal-footer'><input onClick={this.submitHandler} type='submit' /></div>
                </div>
            </div>
        )
    }
    async submitHandler() {
        let games = this.state.ratings
        try {
            let newGame = await axios.post('https://zr-review-api.herokuapp.com/games', games)
            console.log(newGame)
            this.setState({ games: {} })
        }
        catch (err) {
            console.error(err)
        }
    }
}

export default AddGameModal
