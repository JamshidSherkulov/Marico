import React from "react";
import './LogIn.css'
import { BiUser } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';
import ConnectWith from "../../components/ConnectWith/ConnectWith";
import SignUpOption from "../../components/SignUpOption/SignUpOption";




const LogIn = () => {
    
    return(
        <div id="formContainer" className="container">
            <h1 className="text-light">Log In</h1>
            <p className="text-light">Login into existing account.</p>
            <div id="form">
                <div className="input-group mb-3">
                    <input type="text" className="form-control no-border" placeholder="Username" />
                    <span className="input-group-text" id="basic-addon1"> <BiUser className="fs-4"/> </span>
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control no-border" placeholder="Password" />
                    <span class="input-group-text" id="basic-addon1"> <AiFillEye className="fs-4"/> </span>
                </div>
            </div>
            <button className="btn btn-primary w-25 mx-auto mt-5">Log In</button>
            <h1 className="text-light mt-5">Or</h1>
            <p className="text-light">Log In with...</p>
            <ConnectWith />
            <SignUpOption />
        </div>
    )
}

export default LogIn;