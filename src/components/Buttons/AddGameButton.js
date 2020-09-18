import React from "react"
import AddGameModal from '../Modal/addGameModal'
import "../Buttons/Buttons.css"

export default class addGameButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalActive: ''
        }
        this.gameHandler = this.gameHandler.bind(this)
    }
    render() {
        return (
            <div className="rvw-btn">
                <button onClick={this.gameHandler} className="add-game-btn">Add a Game</button>
                <AddGameModal game={this.props.game} active={this.state.modalActive} gameHandler={this.gameHandler} index={this.props.index} />
            </div>
        )
    }
    gameHandler(e) {
        if (e.target.className === 'add-game-btn') {
            this.setState({ modalActive: 'active' })
        } else if (e.target.className === 'modal-wrapper active' || e.target.className === "modal-header") {
            this.setState({ modalActive: '' })
        }
    }
}
