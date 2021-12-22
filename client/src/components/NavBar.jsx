import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from "react-router-dom"
import GuestLinks from './GuestLinks'
import UserLinks from './UserLinks'

export default function NavBar() {

    const {loggedIn} = useSelector(({usersReducer}) => {
        let {loggedIn} = usersReducer
        return {
            loggedIn
        }
    })
    return (
        <div>
            <nav className="black">
                <div className="nav-wrapper">
                <a href="/" className="brand-logo">Tarot Spreads</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                      {loggedIn ?  <UserLinks/> : <GuestLinks/>}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
