import React from 'react'

import CardLight from '../Cards/CardLight'

import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="placeholder"></div>
        <CardLight />
      </main>
    )
  }
}

export default Main
