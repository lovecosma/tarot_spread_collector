import React from 'react'
import {NavLink} from "react-router-dom"

export default function UserLinks() {
    return (
        <div>
             <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/cards">cards</NavLink></li>
        </div>
    )
}
