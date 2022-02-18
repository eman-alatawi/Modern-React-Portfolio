import React from 'react'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top p-4 navBar">
            <div className="container-fluid">
                <a className="navbar-brand">Your Name/Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                        <a className="nav-link" href="#About">About</a>
                        <a className="nav-link" href="#Projects">Projects</a>
                        <a className="nav-link" href="#Contanct">Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
