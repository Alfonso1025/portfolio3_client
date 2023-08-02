import React from "react"
import profilePic from './media/profile_portfolio-removebg-preview.png'
import './styles/Header.css'
import SyncLoader from "react-spinners/SyncLoader";
function Loader(){

    return(
        <div>
           <SyncLoader color="#36d7b7"
                        size={7} />
        </div>
    )
}

export default Loader