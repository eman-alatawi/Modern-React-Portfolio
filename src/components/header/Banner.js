import React from 'react'
import img from '../../images/creative-web-design-1.png'

export default function Banner() {
    return (
        <div className="banner">
            <div>
                <span className="Str"><span>Hi!!</span> Let Me</span>
                <h1>Introduce Myself <sup><i className="fas fa-user-tie"></i></sup></h1>
                <a href="#Contanct"><button>Contact Me</button></a>
            </div>
            <img src={img} width="60%" alt=""/>
        </div>
    )
}
