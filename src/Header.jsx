import React from "react"
import profilePic from './media/profile_portfolio-removebg-preview.png'
import './styles/Header.css'

function Header(){

    return(
        <div className="header-wrapper">
            <img src={profilePic} alt="profile" className="header-pic"/>
            <p className="header-text">Alfonso Elorriaga SoftTech</p>
        </div>
    )
}

export default Header