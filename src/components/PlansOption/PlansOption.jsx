import React from "react";
import './PlansOption.css'
import {AiOutlineCheck} from 'react-icons/ai'

const PlansOption = () => {

    return(
        <div id="plans__container" className="container mt-5">
            <div>
                <div className="mb-5">
                    <h2 className="text-light text-start">Starter</h2>
                    <p className="text-secondary text-start">Perfect for tying out Wavium</p>
                    <h1 className="text-light text-start fw-bold">Free</h1>
                </div>
                <div>
                    <p className="text-light text-start fw-bold">Collect Unlimited subscribers</p>
                    <p className="text-light text-start">500 monthly emails</p>
                    <p className="text-secondary my-4">Upgrade to send more emails</p>
                    <p className="text-light text-start fw-bold">Key features</p>
                    <p className="text-light text-start"> <AiOutlineCheck className="text-light" style={{backgroundColor:"#131313"}}/> Automatic updating home page</p>
                    <p className="text-light text-start"> <AiOutlineCheck className="text-light" style={{backgroundColor:"#131313"}}/> Unlimited sources + posts</p>
                </div>
            </div>
            <div>
                <div className="mb-5">
                    <h2 className="text-light text-start">Basic</h2>
                    <p className="text-secondary text-start">Build your online home</p>
                    <h1 className="text-light text-start fw-bold">$14 <span className="text-secondary fs-6 fw-normal">Per month</span></h1>
                    <p className="text-start text-secondary">or $19/mo, billed monthly</p>
                </div>
                <div>
                    <p className="text-light text-start fw-bold">Collect Unlimited subscribers</p>
                    <p className="text-light text-start">2,000 monthly emails</p>
                    <p className="text-secondary my-4">Purchase more for $0.002 per email</p>
                    <p className="text-light text-start fw-bold">Everything in starter, plus</p>
                    <p className="text-light text-start"> <AiOutlineCheck className="text-light" style={{backgroundColor:"#131313"}}/> Remove Wavium branding</p>
                    <p className="text-light text-start"> <AiOutlineCheck className="text-light" style={{backgroundColor:"#131313"}}/> Embed Wavium on your own domain</p>
                </div>
            </div>
            <div className="bg-primary">
                <div className="mb-5 bg-primary">
                    <h2 className="text-light text-start bg-primary">Complete</h2>
                    <p className="text-light text-start bg-primary">Enhanced engagement</p>
                    <h1 className="text-light text-start fw-bold bg-primary">$29 <span className="text-light fs-6 fw-normal bg-primary">Per month</span></h1>
                    <p className="text-start text-light bg-primary">or $34/mo, billed monthly</p>
                </div>
                <div>
                    <p className="text-light text-start fw-bold bg-primary pb-3 m-0">Collect Unlimited subscribers</p>
                    <p className="text-light text-start bg-primary m-0">10,000 monthly emails</p>
                    <p className="text-light bg-primary py-4 m-0">Purchase more for $0.002 per email</p>
                    <p className="text-light text-start fw-bold bg-primary pb-3 m-0">Everything in starter, plus</p>
                    <p className="text-light text-start bg-primary pb-3 m-0"> <AiOutlineCheck className="text-light bg-primary"/> Collect text massage subscribers</p>
                    <p className="text-light text-start bg-primary m-0"> <AiOutlineCheck className="text-light bg-primary"/> Share posts over text massage</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default PlansOption;