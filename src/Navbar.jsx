import React from "react"
import { Link } from "react-router-dom"
import './styles/Navbar.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineTool, AiOutlineMessage } from 'react-icons/ai';

function Navbar(){

    return(
        <nav className="navbar-wrapper">
            <div className="nav-item">
               
                <Link to="/">
                    <AiOutlineHome style={{fontSize: '17px',color:'#1DEDBD'}}/>
                </Link>
                <p className="nav-text">Home</p>
            </div>
            <div  className="nav-item">
                <Link to="/about">
                   <AiOutlineUser style={{fontSize: '20px',color:'#1DEDBD'}}/>
                </Link>
                <p className="nav-text">About</p>
            </div>
            <div className="nav-item">
                <Link to="/projects">
                    <AiOutlineTool style={{fontSize: '20px',color:'#1DEDBD'}}/>
                </Link>
                <p className="nav-text">Projects</p>
            </div>
            <div  className="nav-item">
                <Link to="/contact">
                    <AiOutlineMessage style={{fontSize: '20px',color:'#1DEDBD'}}/>
                </Link>
                <p className="nav-text">Contact</p>
            </div>
      </nav>
    )
}

export default Navbar