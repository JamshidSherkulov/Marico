import React from "react";
import './GetStarted.css'
import getStartedLogo from '../../assets/Marico/GetStarted/Logo.png'
import {RiCheckboxBlankCircleFill} from 'react-icons/ri'

const GetStarted = () => {

    return(
        <div id="getStarted__container" className="container">
            <div className="text-center"><img src={ getStartedLogo } alt="" /></div>
            <h1 className="text-light display-2 mt-5 fw-bold">Get Started Now</h1>
            <h1 className="text-light fs-2 mt-2 fw-normal">Setup is easy and takes under 5 minutes.</h1>
            <button className="btn btn-primary d-block mx-auto w-25 p-3 fs-5 mt-5 ">Get Started Now</button>
            <h1 className="text-light fs-4 mt-2 fw-normal mt-4"> <RiCheckboxBlankCircleFill className="text-success fs-4"/> 1000+ <span className="fs-4 text-secondary fw-normal">creators have already started</span></h1>
        </div>
    )
}

export default GetStarted;