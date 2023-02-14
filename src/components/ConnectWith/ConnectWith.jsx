import React from "react";
import './ConnectWith.css'
import googleIcon from '../../assets/Marico/Sign_Up/G_logo.png'
import facebookIcon from '../../assets/Marico/Sign_Up/Facebook.png'
import appleIcon from '../../assets/Marico/Sign_Up/Apple_logo.png'

const ConnectWith = () => {

    return(
        <div id="connections" className="container text-light">
            <div>
                <img src={ facebookIcon } alt="" />
                <span className="mx-3">Log in with Facebook</span>
            </div>
            <div>
                <img src={ googleIcon } alt="" />
                <span className="mx-3">Log in with Google</span>
            </div>
            <div>
                <img src={ appleIcon } alt="" />
                <span className="mx-3">Log in with Apple</span>
            </div>
        </div>
    )
}

export default ConnectWith;