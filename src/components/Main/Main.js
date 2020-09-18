import React from 'react'

import CardLight from '../Cards/CardLight'

import './Main.css'

class Main extends React.Component {
  render() {
    if (!this.props.games) {
      return <h1>Please Wait...</h1>
    } else {
      return (
        <main className="main">
          { /* JS */
            // loops through the games, making a Card for each one
            this.props.games.map((item, i)=> {
              return <CardLight key={i} index={i} game={item} />
            })
          }
        </main>
      )
    }
  }
}

export default Main
