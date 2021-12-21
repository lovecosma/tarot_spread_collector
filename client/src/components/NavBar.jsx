import React from 'react'
import {NavLink} from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <nav className="black">
                <div className="nav-wrapper">
                <a href="/" className="brand-logo">Tarot Spreads</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/">home</NavLink></li>
                        <li><NavLink to="/cards">cards</NavLink></li>
                        <li><NavLink to="/login">login</NavLink></li>
                        <li><NavLink to="/signup">signup</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
