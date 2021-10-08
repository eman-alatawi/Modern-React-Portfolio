import React from 'react'
import Banner from './Banner'
import NavBar from './NavBar'

export default function Header() {
    return (
        <header className="header" id="Home">
            <NavBar/>
            <Banner/>
        </header>
    )
}
