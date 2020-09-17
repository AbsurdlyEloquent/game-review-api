import React from 'react'

import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className={`footer ${this.props.className}`}>
        <h3>Made with <img src={require('../../assets/coffee.png')} alt="coffee" className="coffee" /> by</h3>
        <ul>
          <li><a href="https://github.com/maurcord" target="_blank" rel="noopener noreferrer">Mauricio Cordeiro</a></li>
          <li><a href="https://github.com/LexLeach" target="_blank" rel="noopener noreferrer">Lex Leach</a></li>
          <li><a href="https://github.com/iandemed" target="_blank" rel="noopener noreferrer">Ian de Medeiros</a></li>
          <li><a href="https://github.com/absurdlyeloquent" target="_blank" rel="noopener noreferrer">Ethan Henderson</a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer
