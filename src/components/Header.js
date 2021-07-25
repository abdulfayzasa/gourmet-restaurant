import React, { Component } from 'react'
import humburger from '../Images/hamburger.jpg'

export default class Header extends Component {
    render() {
        return (
            <div>
            <header className="w3-display-container w3-content w3-wide" style={{"max-width":"1600px","min-width":"500px"}} id="home">
            <img className="w3-image" src={humburger} alt="Hamburger Catering" width="1600" height="800"/>
            <div className="w3-display-bottomleft w3-padding-large w3-opacity">
            <h1 className="w3-xxlarge">Le Catering</h1>
            </div>
            </header>
            </div>
        )
    }
}
