import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (

            <nav className="bg-body-tertiary">
                <NavLink  to="/"> Home </NavLink>
                <NavLink  to="/paralelqueries"> Friends </NavLink>
                <NavLink  to="/rqsuperheroes">RQ Super Heros</NavLink>
            </nav>
    )
}

export default Header