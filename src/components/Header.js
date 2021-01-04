import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header class="header">
                <h2>MD</h2>
                <ul class="nav">
                    <li>À propos</li>
                    <li>Projets</li>
                    <li>Expériences</li>
                    <li>Contact</li>
                </ul>
            </header>
        )
    }
}

export default Header
