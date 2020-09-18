import React from 'react'
import './Modal.css'
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
                        <form className="addGame-modal">
                            Name:<input type="text" name="name" id="name" />
                            Image URL:<input type="url" name="imageURL" id="imageURL" />
                            Plateforms:<input type="text" name="platforms" id="platforms" />
                            Genre:<input type="text" name="genre" id="genre" />
                            Tags:<input type="text" name="tags" id="tags" />
                            Maxplayer:<input type="text" name="maxplayers" id="maxplayers" />
                            Modable:<input type="checkbox" name="modable" id="modable" />
                        </form>
                    </div>
                    <div className='modal-footer'><input onClick={this.submitHandler} type='submit' /></div>
                </div>
            </div>
        )
    }
    async submitHandler() {
        let games = this.state.games
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
