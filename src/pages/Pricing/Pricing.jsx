import React from "react";
import Footer from "../../components/Footer/Footer";
import GetStarted from "../../components/GetStarted/GetStarted";
import PlansOption from "../../components/PlansOption/PlansOption";
import './Pricing.css'

const Pricing = () => {

    return (
        <div>
            <h1 className="text-light display-4 mt-5 fw-bold">Choose the plan that's right for you.</h1>
            <PlansOption />
            <GetStarted />
            <Footer />
        </div>
    )
}

export default Pricing;