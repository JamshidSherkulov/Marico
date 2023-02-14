import React from "react";
import './SignUp.css'
import { BiUser } from 'react-icons/bi';
import { AiFillEye, AiOutlineMail } from 'react-icons/ai';
import ConnectWith from "../../components/ConnectWith/ConnectWith";
import LogInOption from "../../components/LogInOption/LogInOption";


const SignUp = () => {

    return(
        <div id="formContainer" className="container">
            <h1 className="text-light">Sign Up</h1>
            <p className="text-light">Fill all field for create an account.</p>
            <div id="form">
                <div className="input-group mb-3">
                    <input type="text" className="form-control no-border" placeholder="Username" />
                    <span className="input-group-text" id="basic-addon1"> <BiUser className="fs-4" /> </span>
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control no-border" placeholder="Password" />
                    <span class="input-group-text" id="basic-addon1"> <AiFillEye className="fs-4" /> </span>
                </div>
                <div className="input-group mb-3">
                    <input type="email" className="form-control no-border" placeholder="Email Address" />
                    <span className="input-group-text" id="basic-addon1"> <AiOutlineMail className="fs-4" /> </span>
                </div>
                <div id="btnContainer">
                    <button className="btn btn-primary w-100">Sign Up</button>
                </div>
            </div>
            <h1 className="text-light mt-5">Or</h1>
            <p className="text-light">Sign up with...</p>
            <ConnectWith />
            <LogInOption />
        </div>
    )
}

export default SignUp;